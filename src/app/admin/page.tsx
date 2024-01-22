
import dynamic from "next/dynamic";

const HomeAdmin = dynamic(() => import("./_components/home/Home"), {
  ssr: false,
});
const PrivateRoute = dynamic(() => import("@/components/PrivateRouter"), {
  ssr: false,
});
const Home = () => {
  
  return (
    <div>
      <PrivateRoute >
        <HomeAdmin />
      </PrivateRoute>
    </div>
  );
};

export default Home;
