import React, { useState, useEffect } from "react";
const Final = () => {
  const URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
  const [drinksData, setDrinksData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState({ status: false, msg: "" });
  const fetchDrink = async (apiUrl) => {
    setLoading(true);
    setIsError({ status: false, msg: "" });
    try {
      const response = await fetch(apiUrl);
      const { drinks } = await response.json();
      setDrinksData(drinks);
      setLoading(false);
      setIsError({ status: false, msg: "" });
      if (!drinks) {
        throw new Error("data not found");
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      setIsError({
        status: true,
        msg: error.message || "something went wrong!..",
      });
    }
  };
  useEffect(() => {
    const correctUrl = `${URL}+${searchTerm}`;
    fetchDrink(correctUrl);
  }, [searchTerm]);
  return (
    <div>
      {/* <h2>cocktail (api) data fetching</h2> */}
      {/* <h1>drinks count : {drinksData.length}</h1> */}
      <form>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="search something new.."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <hr />
        {loading && !isError.status && <h3>Loading..</h3>}
        {isError.status && <h3 style={{ color: "red" }}>{isError.msg}</h3>}
        {!loading && !isError.status && (
          <ul className="cock-tail-data">
            {drinksData.map((eachDrink) => {
              const { idDrink, strDrink, strDrinkThumb } = eachDrink;
              return (
                <li key={idDrink}>
                  <div>
                    <img src={strDrinkThumb} />
                  </div>
                  <div>
                    <h3>{strDrink}</h3>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </form>
    </div>
  );
};
export default Final;
