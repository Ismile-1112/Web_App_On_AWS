import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Types.ObjectId,
        ref: "Users",
    },
    orderDetails: [
        {
            
        },
    ],
},
{
    timestamps: true
}
);

export const orderModel = mongoose.model("Orders", OrderSchema);