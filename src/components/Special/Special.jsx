import { useContext } from "react";
import { AssetContext } from "../Grandpa/Grandpa";

const Special = ({asset}) => {
    const gift = useContext(AssetContext)

    return (
        <div>
            <h2>Special Person</h2>
            <p>Has : {asset}</p>
            <p>Has : {gift}</p>
        </div>
    );
};

export default Special;