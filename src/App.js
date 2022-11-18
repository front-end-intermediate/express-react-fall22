import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Recipes from "./Recipes";
import RecipeDetail from "./RecipeDetail";
import Nav from "./Nav";
import { useFetch } from "./hooks/useFetch";

function App() {
  const { loading, data: recipes, error } = useFetch("/api/recipes");
  const [loggedin, setLoggedin] = React.useState(false);

  if (loading === true) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <main>
      <BrowserRouter>
        <Nav setLoggedin={setLoggedin} loggedin={loggedin} />
        <Routes>
          <Route
            path="/"
            element={<Recipes recipes={recipes} loggedin={loggedin} />}
          />
          <Route
            path="/:recipeId"
            element={<RecipeDetail recipes={recipes} />}
          />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
