import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { X, CheckCircle2, ShieldCheck, CreditCard, QrCode, Building, Truck, AlertCircle, ArrowLeft, Loader2, Download } from 'lucide-react';
import confetti from 'canvas-confetti';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose }) => {
  const { items, subtotal, discount, discountCode, shipping, total, clearCart } = useCart();

  const [step, setStep] = useState<'details' | 'payment' | 'processing' | 'confirmed'>('details');

  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: 'Kozhikode',
    state: 'Kerala',
    pincode: '673032',
    notes: ''
  });

  const [shippingMethod, setShippingMethod] = useState<'standard' | 'express'>('standard');
  const [paymentMethod, setPaymentMethod] = useState<'upi' | 'card' | 'netbanking' | 'cod'>('upi');
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [confirmedOrder, setConfirmedOrder] = useState<any>(null);

  if (!isOpen) return null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateDetails = () => {
    const errors: Record<string, string> = {};
    if (!formData.fullName.trim()) errors.fullName = 'Full name is required';
    if (!formData.email.trim() || !formData.email.includes('@')) errors.email = 'Valid email is required';
    if (!formData.phone.trim() || formData.phone.length < 10) errors.phone = 'Valid 10-digit phone number is required';
    if (!formData.address.trim()) errors.address = 'Delivery address is required';
    if (!formData.pincode.trim() || formData.pincode.length !== 6) errors.pincode = 'Valid 6-digit Indian PIN code required';

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleProceedToPayment = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateDetails()) {
      setStep('payment');
    }
  };

  const handleSimulatePayment = () => {
    setStep('processing');

    setTimeout(() => {
      const orderId = `KAP-${new Date().getFullYear()}-${Math.floor(100000 + Math.random() * 900000)}`;
      const order = {
        orderId,
        date: new Date().toLocaleDateString('en-IN', {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        }),
        items: [...items],
        total,
        subtotal,
        discount,
        shipping: shipping + (shippingMethod === 'express' ? 120 : 0),
        customer: { ...formData },
        paymentMethod: paymentMethod.toUpperCase(),
        status: 'VERIFIED & PAID'
      };

      setConfirmedOrder(order);
      setStep('confirmed');
      clearCart();

      // Fire celebratory confetti!
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#C92127', '#E9E6DC', '#481A20']
      });
    }, 2000);
  };

  const calculatedShipping = shipping + (shippingMethod === 'express' ? 120 : 0);
  const grandTotal = subtotal - discount + calculatedShipping;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      
      <div className="relative bg-[#0F0F0F] border border-[#292929] w-full max-w-4xl text-[#E9E6DC] shadow-2xl my-auto overflow-hidden">
        
        {/* Header */}
        <div className="border-b border-[#292929] px-6 py-4 flex justify-between items-center bg-[#141414]">
          <div className="flex items-center space-x-2 text-xs font-mono">
            <span className="text-[#C92127] font-bold">KAAPPITALISM ORDER DESK</span>
            <span>//</span>
            <span className="uppercase text-white/70">
              {step === 'details' && 'STEP 1: SHIPPING & CONTACT'}
              {step === 'payment' && 'STEP 2: RAZORPAY PAYMENT GATEWAY'}
              {step === 'processing' && 'STEP 3: AUTHORIZING TRANSACTION...'}
              {step === 'confirmed' && 'ORDER CONFIRMED & DISPATCH QUEUED'}
            </span>
          </div>

          {step !== 'processing' && (
            <button
              onClick={onClose}
              className="p-1.5 text-[#E9E6DC]/70 hover:text-white hover:bg-white/10 rounded transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Modal Content */}
        {step === 'confirmed' && confirmedOrder ? (
          /* Confirmation Screen */
          <div className="p-6 sm:p-12 text-center space-y-6 max-h-[85vh] overflow-y-auto">
            <div className="w-16 h-16 bg-[#162616] border border-emerald-500 rounded-full flex items-center justify-center mx-auto text-emerald-400">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono text-[#C92127] uppercase tracking-widest">
                VERIFIED TRANSACTION • MALABAR COLD CHAIN
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl font-bold text-white">
                THANK YOU FOR YOUR ORDER.
              </h3>
              <p className="font-mono text-sm text-[#E9E6DC]/70">
                ORDER ID: <span className="text-white font-bold">{confirmedOrder.orderId}</span>
              </p>
            </div>

            {/* Receipt Summary Card */}
            <div className="bg-[#141414] border border-[#292929] max-w-lg mx-auto p-5 text-left text-xs font-mono space-y-4">
              <div className="flex justify-between border-b border-[#292929] pb-3">
                <span className="text-[#E9E6DC]/60">DATE & TIME:</span>
                <span className="text-white">{confirmedOrder.date}</span>
              </div>

              <div className="flex justify-between border-b border-[#292929] pb-3">
                <span className="text-[#E9E6DC]/60">DELIVER TO:</span>
                <span className="text-white text-right font-sans">
                  {confirmedOrder.customer.fullName}<br />
                  {confirmedOrder.customer.address}, {confirmedOrder.customer.city}, {confirmedOrder.customer.state} - {confirmedOrder.customer.pincode}
                </span>
              </div>

              <div className="flex justify-between border-b border-[#292929] pb-3">
                <span className="text-[#E9E6DC]/60">PAYMENT METHOD:</span>
                <span className="text-emerald-400 font-bold">{confirmedOrder.paymentMethod} (VERIFIED)</span>
              </div>

              <div className="space-y-1 pt-1">
                <div className="text-[10px] text-[#E9E6DC]/60 uppercase">ITEMS ORDERED:</div>
                {confirmedOrder.items.map((it: any, idx: number) => (
                  <div key={idx} className="flex justify-between text-[#E9E6DC]">
                    <span>{it.quantity}x {it.name} ({it.variant})</span>
                    <span>₹{(it.price * it.quantity).toLocaleString('en-IN')}</span>
                  </div>
                ))}
              </div>

              <div className="flex justify-between border-t border-[#292929] pt-3 text-sm font-bold text-white">
                <span>TOTAL PAID:</span>
                <span className="text-[#C92127]">₹{confirmedOrder.total.toLocaleString('en-IN')}</span>
              </div>
            </div>

            <div className="flex justify-center gap-4 pt-4">
              <button
                onClick={() => window.print()}
                className="bg-[#1C1C1C] hover:bg-[#292929] text-white border border-[#292929] px-6 py-3 font-mono text-xs uppercase tracking-wider flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>SAVE RECEIPT</span>
              </button>
              <button
                onClick={onClose}
                className="bg-[#E9E6DC] text-black hover:bg-[#C92127] hover:text-white transition-all px-8 py-3 font-mono text-xs uppercase font-bold tracking-widest"
              >
                RETURN TO CATALOGUE
              </button>
            </div>
          </div>
        ) : step === 'processing' ? (
          /* Processing Spinner Screen */
          <div className="p-16 text-center space-y-6">
            <Loader2 className="w-12 h-12 text-[#C92127] animate-spin mx-auto" />
            <div className="space-y-2">
              <h4 className="font-serif text-2xl font-bold text-white">
                CONNECTING TO RAZORPAY GATEWAY...
              </h4>
              <p className="text-xs font-mono text-[#E9E6DC]/70">
                Authorizing secure payment token and verifying order state against inventory.
              </p>
            </div>
          </div>
        ) : (
          /* 2-Column Checkout Layout */
          <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-[#292929]">
            
            {/* Left Column (7 cols): Details Form or Payment Method Selector */}
            <div className="lg:col-span-7 p-6 sm:p-8 space-y-6 max-h-[80vh] overflow-y-auto">
              
              {step === 'details' ? (
                <form onSubmit={handleProceedToPayment} className="space-y-5">
                  <div className="flex justify-between items-center border-b border-[#292929] pb-2">
                    <span className="font-mono text-xs uppercase tracking-wider font-bold text-white">
                      SHIPPING & CONTACT INFORMATION
                    </span>
                    <span className="text-[10px] font-mono text-[#E9E6DC]/50">* ALL FIELDS REQUIRED</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-mono text-[#E9E6DC]/70 uppercase mb-1">
                        FULL NAME *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="e.g. Fardhan Sabir"
                        className="w-full bg-[#080808] border border-[#292929] px-3 py-2 text-xs font-mono text-white focus:outline-none focus:border-[#C92127]"
                      />
                      {formErrors.fullName && <p className="text-[10px] font-mono text-[#C92127] mt-1">{formErrors.fullName}</p>}
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono text-[#E9E6DC]/70 uppercase mb-1">
                        EMAIL ADDRESS *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="fardhan@kaappitalism.in"
                        className="w-full bg-[#080808] border border-[#292929] px-3 py-2 text-xs font-mono text-white focus:outline-none focus:border-[#C92127]"
                      />
                      {formErrors.email && <p className="text-[10px] font-mono text-[#C92127] mt-1">{formErrors.email}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-mono text-[#E9E6DC]/70 uppercase mb-1">
                        PHONE NUMBER (+91) *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="9496000000"
                        className="w-full bg-[#080808] border border-[#292929] px-3 py-2 text-xs font-mono text-white focus:outline-none focus:border-[#C92127]"
                      />
                      {formErrors.phone && <p className="text-[10px] font-mono text-[#C92127] mt-1">{formErrors.phone}</p>}
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono text-[#E9E6DC]/70 uppercase mb-1">
                        PIN CODE *
                      </label>
                      <input
                        type="text"
                        name="pincode"
                        maxLength={6}
                        value={formData.pincode}
                        onChange={handleInputChange}
                        placeholder="673032"
                        className="w-full bg-[#080808] border border-[#292929] px-3 py-2 text-xs font-mono text-white focus:outline-none focus:border-[#C92127]"
                      />
                      {formErrors.pincode && <p className="text-[10px] font-mono text-[#C92127] mt-1">{formErrors.pincode}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-[#E9E6DC]/70 uppercase mb-1">
                      DELIVERY ADDRESS *
                    </label>
                    <textarea
                      rows={2}
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      placeholder="Building name, Street, Landmark"
                      className="w-full bg-[#080808] border border-[#292929] px-3 py-2 text-xs font-mono text-white focus:outline-none focus:border-[#C92127]"
                    />
                    {formErrors.address && <p className="text-[10px] font-mono text-[#C92127] mt-1">{formErrors.address}</p>}
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-mono text-[#E9E6DC]/70 uppercase mb-1">
                        CITY
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        className="w-full bg-[#080808] border border-[#292929] px-3 py-2 text-xs font-mono text-white focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-mono text-[#E9E6DC]/70 uppercase mb-1">
                        STATE
                      </label>
                      <input
                        type="text"
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}
                        className="w-full bg-[#080808] border border-[#292929] px-3 py-2 text-xs font-mono text-white focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Shipping Method */}
                  <div className="pt-2">
                    <label className="block text-[11px] font-mono text-white uppercase font-bold mb-2">
                      SELECT DISPATCH SPEED
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div
                        onClick={() => setShippingMethod('standard')}
                        className={`p-3 border cursor-pointer transition-all ${
                          shippingMethod === 'standard'
                            ? 'border-[#C92127] bg-[#1F1415]'
                            : 'border-[#292929] bg-[#141414] hover:border-white/30'
                        }`}
                      >
                        <div className="flex justify-between items-center text-xs font-mono">
                          <span className="font-bold text-white">STANDARD COURIER</span>
                          <span className="text-[#C92127]">{shipping === 0 ? 'FREE' : `₹${shipping}`}</span>
                        </div>
                        <p className="text-[10px] text-[#E9E6DC]/60 font-sans mt-1">3–5 business days nationwide</p>
                      </div>

                      <div
                        onClick={() => setShippingMethod('express')}
                        className={`p-3 border cursor-pointer transition-all ${
                          shippingMethod === 'express'
                            ? 'border-[#C92127] bg-[#1F1415]'
                            : 'border-[#292929] bg-[#141414] hover:border-white/30'
                        }`}
                      >
                        <div className="flex justify-between items-center text-xs font-mono">
                          <span className="font-bold text-white">EXPRESS COLD-CHAIN</span>
                          <span className="text-[#C92127]">₹{shipping + 120}</span>
                        </div>
                        <p className="text-[10px] text-[#E9E6DC]/60 font-sans mt-1">24–48hr insulated cold delivery</p>
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#E9E6DC] text-black hover:bg-[#C92127] hover:text-white transition-all py-3.5 px-4 font-mono text-xs uppercase font-bold tracking-widest mt-4"
                  >
                    CONTINUE TO PAYMENT (₹{grandTotal.toLocaleString('en-IN')})
                  </button>
                </form>
              ) : (
                /* Step 2: Payment Gateway Selection */
                <div className="space-y-6">
                  <div className="flex items-center justify-between border-b border-[#292929] pb-3">
                    <button
                      onClick={() => setStep('details')}
                      className="flex items-center gap-1.5 text-xs font-mono text-[#E9E6DC]/70 hover:text-white"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>EDIT ADDRESS</span>
                    </button>
                    <span className="text-[10px] font-mono text-emerald-400">RAZORPAY SECURE GATEWAY</span>
                  </div>

                  <div className="space-y-3">
                    <p className="text-xs font-mono text-white font-bold uppercase">
                      CHOOSE PAYMENT METHOD
                    </p>

                    {/* Method 1: UPI */}
                    <div
                      onClick={() => setPaymentMethod('upi')}
                      className={`p-4 border cursor-pointer flex items-center justify-between ${
                        paymentMethod === 'upi' ? 'border-[#C92127] bg-[#1C1214]' : 'border-[#292929] bg-[#141414]'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <QrCode className="w-5 h-5 text-[#C92127]" />
                        <div>
                          <p className="text-xs font-mono font-bold text-white">UPI INSTANT / QR CODE</p>
                          <p className="text-[10px] text-[#E9E6DC]/60">Google Pay, PhonePe, Paytm, BHIM</p>
                        </div>
                      </div>
                      <div className={`w-3.5 h-3.5 rounded-full border ${paymentMethod === 'upi' ? 'bg-[#C92127] border-[#C92127]' : 'border-[#292929]'}`} />
                    </div>

                    {/* Method 2: Card */}
                    <div
                      onClick={() => setPaymentMethod('card')}
                      className={`p-4 border cursor-pointer flex items-center justify-between ${
                        paymentMethod === 'card' ? 'border-[#C92127] bg-[#1C1214]' : 'border-[#292929] bg-[#141414]'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <CreditCard className="w-5 h-5 text-[#C92127]" />
                        <div>
                          <p className="text-xs font-mono font-bold text-white">DEBIT / CREDIT CARDS</p>
                          <p className="text-[10px] text-[#E9E6DC]/60">Visa, MasterCard, RuPay, Amex</p>
                        </div>
                      </div>
                      <div className={`w-3.5 h-3.5 rounded-full border ${paymentMethod === 'card' ? 'bg-[#C92127] border-[#C92127]' : 'border-[#292929]'}`} />
                    </div>

                    {/* Method 3: Net Banking */}
                    <div
                      onClick={() => setPaymentMethod('netbanking')}
                      className={`p-4 border cursor-pointer flex items-center justify-between ${
                        paymentMethod === 'netbanking' ? 'border-[#C92127] bg-[#1C1214]' : 'border-[#292929] bg-[#141414]'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <Building className="w-5 h-5 text-[#C92127]" />
                        <div>
                          <p className="text-xs font-mono font-bold text-white">NET BANKING</p>
                          <p className="text-[10px] text-[#E9E6DC]/60">HDFC, SBI, ICICI, Axis, Federal Bank</p>
                        </div>
                      </div>
                      <div className={`w-3.5 h-3.5 rounded-full border ${paymentMethod === 'netbanking' ? 'bg-[#C92127] border-[#C92127]' : 'border-[#292929]'}`} />
                    </div>

                    {/* Method 4: COD */}
                    <div
                      onClick={() => setPaymentMethod('cod')}
                      className={`p-4 border cursor-pointer flex items-center justify-between ${
                        paymentMethod === 'cod' ? 'border-[#C92127] bg-[#1C1214]' : 'border-[#292929] bg-[#141414]'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <Truck className="w-5 h-5 text-[#C92127]" />
                        <div>
                          <p className="text-xs font-mono font-bold text-white">CASH ON DELIVERY</p>
                          <p className="text-[10px] text-[#E9E6DC]/60">Pay cash/UPI upon door delivery</p>
                        </div>
                      </div>
                      <div className={`w-3.5 h-3.5 rounded-full border ${paymentMethod === 'cod' ? 'bg-[#C92127] border-[#C92127]' : 'border-[#292929]'}`} />
                    </div>
                  </div>

                  {/* Integration Notice */}
                  <div className="bg-[#141414] border border-[#292929] p-3 text-[10px] font-mono text-[#E9E6DC]/60 space-y-1">
                    <p className="text-[#C92127] font-bold">RAZORPAY INTEGRATION READINESS:</p>
                    <p>
                      Frontend is pre-architected with order payload schema. Secret keys remain securely server-side. Click below to verify and complete transaction.
                    </p>
                  </div>

                  <button
                    onClick={handleSimulatePayment}
                    className="w-full bg-[#E9E6DC] text-black hover:bg-[#C92127] hover:text-white transition-all py-4 px-4 font-mono text-xs uppercase font-bold tracking-widest"
                  >
                    AUTHORIZE & COMPLETE ORDER (₹{grandTotal.toLocaleString('en-IN')})
                  </button>
                </div>
              )}

            </div>

            {/* Right Column (5 cols): Order Summary Card */}
            <div className="lg:col-span-5 p-6 bg-[#0B0B0B] flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="border-b border-[#292929] pb-3">
                  <span className="font-mono text-xs uppercase tracking-wider font-bold text-white">
                    ORDER SUMMARY ({items.length} {items.length === 1 ? 'ITEM' : 'ITEMS'})
                  </span>
                </div>

                <div className="max-h-56 overflow-y-auto space-y-3 pr-1">
                  {items.map((item) => (
                    <div key={item.id} className="flex justify-between items-center text-xs font-mono">
                      <div className="flex items-center space-x-2 min-w-0">
                        <img src={item.image} alt={item.name} className="w-10 h-12 object-cover border border-[#292929] shrink-0" />
                        <div className="truncate">
                          <p className="text-white truncate font-serif font-bold">{item.name}</p>
                          <p className="text-[10px] text-[#E9E6DC]/50 uppercase">{item.variant} × {item.quantity}</p>
                        </div>
                      </div>
                      <span className="text-white font-bold shrink-0 ml-2">
                        ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-[#292929] pt-4 space-y-2 text-xs font-mono text-[#E9E6DC]/75">
                  <div className="flex justify-between">
                    <span>SUBTOTAL</span>
                    <span className="text-white">₹{subtotal.toLocaleString('en-IN')}</span>
                  </div>
                  {discount > 0 && (
                    <div className="flex justify-between text-emerald-400">
                      <span>DISCOUNT ({discountCode})</span>
                      <span>-₹{discount.toLocaleString('en-IN')}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span>SHIPPING ({shippingMethod.toUpperCase()})</span>
                    <span className="text-white">
                      {calculatedShipping === 0 ? 'FREE' : `₹${calculatedShipping}`}
                    </span>
                  </div>
                  <div className="flex justify-between text-base font-bold text-white border-t border-[#292929] pt-3">
                    <span>TOTAL PAYABLE</span>
                    <span className="text-[#C92127]">₹{grandTotal.toLocaleString('en-IN')}</span>
                  </div>
                </div>
              </div>

              <div className="bg-[#141414] border border-[#292929] p-3 text-[10px] font-mono text-[#E9E6DC]/50 space-y-1">
                <div className="flex items-center gap-1.5 text-white font-bold">
                  <ShieldCheck className="w-4 h-4 text-[#C92127]" />
                  <span>NATIVE COLD CHAIN GUARANTEE</span>
                </div>
                <p>Bottled in sterile glass flask at the Calicut Roastery. Dispatched under ambient chilled control.</p>
              </div>

            </div>

          </div>
        )}

      </div>

    </div>
  );
};
