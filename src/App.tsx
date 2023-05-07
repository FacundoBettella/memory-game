import { BrowserRouter } from "react-router-dom";

import { Layout } from "./Layout";
import { BodyComponent } from "./modules/components";
import { initAxios } from "./config/AxiosConfig";

const MemoryApp = () => {
  initAxios();

  return (
    <Layout>
      <BrowserRouter>
        <BodyComponent />
      </BrowserRouter>
    </Layout>
  );
}

export default MemoryApp;
