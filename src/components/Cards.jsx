import { useContext } from "react";
import { OrderContext } from "../Context/OrderContext";


const Cards = () => {
  const orders=useContext(OrderContext);
  const completed=orders.filter((order)=>order.status.completed);
  const shipped=orders.filter((order)=>order.status.shipped);
  const pending=orders.filter((order)=>order.status.pending);
  const cancelled=orders.filter((order)=>order.status.cancelled);
  return (
    <div className="flex justify-between m-10 flex-wrap">
      <div className="w-1/6 h-52 bg-zinc-400 rounded-lg text-center flex-shrink-0 p-10">
        <h1 className="text-3xl font-bold">Total Orders</h1>
        <h2 className="text-2xl font-semibold mt-5">{orders.length}</h2>
      </div>
      <div className="w-1/6 h-52 bg-green-400 rounded-lg text-center flex-shrink-0 p-10">
        <h1 className="text-3xl font-bold">Completed Orders</h1>
        <h2 className="text-2xl font-semibold mt-5">{completed.length}</h2>
      </div>
      <div className="w-1/6 h-52 bg-blue-400 rounded-lg text-center flex-shrink-0 p-10">
        <h1 className="text-3xl font-bold">Shipped Orders</h1>
        <h2 className="text-2xl font-semibold mt-5">{shipped.length}</h2>
      </div>
      <div className="w-1/6 h-52 bg-emerald-400 rounded-lg text-center flex-shrink-0 p-10">
        <h1 className="text-3xl font-bold">Pending Orders</h1>
        <h2 className="text-2xl font-semibold mt-5">{pending.length}</h2>
      </div>
      <div className="w-1/6 h-52 bg-red-400 rounded-lg text-center flex-shrink-0 p-10">
        <h1 className="text-3xl font-bold">Cancelled Orders</h1>
        <h2 className="text-2xl font-semibold mt-5">{cancelled.length}</h2>
      </div>
    </div>
  );
}

export default Cards