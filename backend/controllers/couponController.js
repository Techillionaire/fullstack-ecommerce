import Coupon from '../models/couponModel.js'



const createCoupon = async (req, res) => {

    const { code, discount, expiryDate, assignedTo } = req.body;

    try {
      const coupon = new Coupon({ code, discount, expiryDate, assignedTo });
      await coupon.save();
      res.status(201).json({ message: 'Coupon created and assigned successfully', coupon });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }


}


const validateCoupon = async (req, res) => {

    const { code, userId } = req.body;

    try {
      const coupon = await Coupon.findOne({ code, assignedTo: userId });
  
      if (!coupon) {
        return res.status(404).json({ message: 'Invalid coupon code or coupon not assigned to you' });
      }
  
      // Check if coupon is expired
      if (new Date() > coupon.expiryDate) {
        return res.status(400).json({ message: 'Coupon has expired' });
      }
  
      res.status(200).json({ message: 'Coupon is valid', discount: coupon.discount });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }

}

export {createCoupon, validateCoupon}