import React from "react";
import BackgroundWave from "./components/BackgroundWave";
import Home from "./pages/Home";

// http://192.168.111.226/vg/gestion/apps/gsie.cgi?D.action=sie&siemodel=RHNOM&siedunction=012&sesid=12fqndQWpreHqA312511vMcoejKW%20LWU

const App = () => {
  return (
    <>
      <Home />
      <BackgroundWave />
    </>
  );
};

export default App;
