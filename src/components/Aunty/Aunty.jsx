import Cousin from "../Cousin/Cousin";

const Aunty = () => {
    return (
        <div>
            <h2>Aunty</h2>
            <section className="flex">
                <Cousin name={'Rocky'}></Cousin>
                <Cousin name={'Rubaiya'}></Cousin>
            </section>
        </div>
    );
};

export default Aunty;