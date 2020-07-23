const resolveRoutes = (route) => {
  if (route === "/") {
    return route;
  } else if (route.length < 6) {
    return "/:id";
  } else if (route.includes("page")) {
    return "/page";
  } else {
    console.log("soy ninguno de las anteriores");
  }
};

export default resolveRoutes;
