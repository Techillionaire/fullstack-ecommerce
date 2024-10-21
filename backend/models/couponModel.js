import mongoose from 'mongoose'



const couponSchema = new mongoose.Schema({
  code: { type: String, required: true, unique: true },
  discount: { type: Number, required: true }, // Discount percentage or fixed value
  expiryDate: { type: Date, required: true }, // Coupon expiration date
  assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true } // Coupon assigned to specific user
}, 

{ 
timestamps: true 
});

export default mongoose.models.Coupon || mongoose.model('Coupon', couponSchema);
