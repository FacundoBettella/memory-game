import { initAxios } from "./config/AxiosConfig";
import { BrowserRouter } from "react-router-dom";
import { Layout, BodyComponent } from "./modules/components";

const MemoryApp = () => {
  initAxios();

  return (
    <Layout>
      <BrowserRouter>
        <BodyComponent />
      </BrowserRouter>
    </Layout>
  );
};

export default MemoryApp;
