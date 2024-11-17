import { useContext } from "react";
import { OrderContext } from "../Context/OrderContext.jsx";

const Orders = () => {
  const orders = useContext(OrderContext);
  return (
    <div className="m-10 text-center text-white h-80 overflow-y-scroll">
      <h1 className="text-4xl font-extrabold">Orders</h1>
      <div className="flex p-3 justify-between border-2 border-blue-500 m-5">
        <div className="ml-5">Order_Id</div>
        <div className="ml-5">Order_Name</div>
        <div className="ml-8">Date</div>
        <div>Status</div>
        <div>Modify</div>
      </div>
      {orders.map((order) => {
        let status="";
        if(order.status.completed){
          status="completed";
        }
        else if (order.status.cancelled) {
          status = "cancelled";
        }
        else if(order.status.shipped){
          status="shipped";
        }
        else if(order.status.pending){
          status="pending";
        }
        return (
          <div
            className="flex p-3 justify-between bg-zinc-800 mt-2 mx-5"
            key={order.order_id}
          >
            <div className="text-xl min-w-32 self-center">{order.order_id}</div>
            <div className="text-xl min-w-72 self-center">{order.order_name}</div>
            <div className="text-xl min-w-32 self-center">{order.date}</div>
            <div className="text-xl min-w-32 self-center">{status}</div>
            {status != "completed" ? (
              <button className="text-xl text-red-400">Modify Order</button>
            ) : (
              <div className="text-xl text-green-400">order complete</div>
            )}
          </div>
        );
      }
      )}
    </div>
  );
};

export default Orders;
