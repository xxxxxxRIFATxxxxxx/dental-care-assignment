import { useContext } from "react";
import { DoctorsContext } from "../context/DoctorsProvider";

const useDoctors = () => {
    return useContext(DoctorsContext);
};

export default useDoctors;