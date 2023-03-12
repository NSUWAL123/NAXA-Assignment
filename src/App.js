import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getServices } from "./actions";

function App() {
  const dispatch = useDispatch();
  const services = useSelector(state => state.serviceReducer.services);

  useEffect(() => {
    dispatch(getServices());
  }, [])

  return (
    <div className="App">
      <h1>{services.map((service) => {
        return (
          <div>{service.title}</div>
        )
      })}</h1>
    </div>
  );
}

export default App;
