import mongoose from "mongoose";

const generateOrderId = () => {
  const number = 100000
  return Math.floor(1000 * Math.random() * number).toString().slice(0, 5);
}

const orderSchema = new mongoose.Schema({
  orderId: { 
    type: String,
    unique: true,
    default : generateOrderId
  },
  firstname: {
    type: String, required: true 
  },
  lastname: {
    type: String, required: true 
  },
  phone: { 
    type: String, required: true 
  },
  address: {
    type: String, required: true 
  },
  email: {
    type: String, required: true, unique: false,
  },
  date: { 
    type: Date, default: Date.now()
  },
  // totalPayment: { 
  //   type: Number, required: true 
  // },
  // status: { 
  //   type: String, required: true 
  // },
  items: [
    {
      productID: { type: String, required: true },
      productName: { type: String, required: true },
      productImage: [],
      quantity: { type: Number, required: true },
      productPrice: { type: Number, required: true },
    },
  ],
}, {timestamps: true});

const Order = mongoose.model('Order', orderSchema);

export default Order;
