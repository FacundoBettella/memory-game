import { initAxios } from "./config/AxiosConfig";
import { BrowserRouter } from "react-router-dom";
import { ErrorBoundaries } from "./utils/ErrorBoundaries";
import { Layout, BodyComponent } from "./modules/components";

const MemoryApp = () => {
  initAxios();

  return (
    <ErrorBoundaries fallBackComponent={<>Algo va mal</>}>
      <Layout>
        <BrowserRouter>
          <BodyComponent />
        </BrowserRouter>
      </Layout>
    </ErrorBoundaries>
  );
};

export default MemoryApp;
