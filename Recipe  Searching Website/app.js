
      async function searchRecipe() {
        const query = document.getElementById("searchInput").value.trim();
        const container = document.getElementById("recipeContainer");
        container.innerHTML = "";

        if (!query) {
          container.innerHTML = `<p class="text-danger">⚠️ Please enter a dish name.</p>`;
          return;
        }

        try {
          const res = await fetch(
            `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
          );
          const data = await res.json();

          if (!data.meals) {
            container.innerHTML = `<p class="text-danger">❌ No recipes found. Try another dish.</p>`;
            return;
          }

          data.meals.forEach((meal) => {
            const ingredients = [];
            for (let i = 1; i <= 20; i++) {
              const ingredient = meal[`strIngredient${i}`];
              const measure = meal[`strMeasure${i}`];
              if (ingredient && ingredient.trim() !== "") {
                ingredients.push(`${ingredient} - ${measure}`);
              }
            }

            const recipeCard = `
            <div class="col-md-4">
              <div class="card shadow h-100">
                <img src="${meal.strMealThumb}" class="recipe-img" alt="${
              meal.strMeal
            }">
                <div class="card-body">
                  <h5 class="card-title">${meal.strMeal}</h5>
                  <p><b>Category:</b> ${meal.strCategory}</p>
                  <p><b>Area:</b> ${meal.strArea}</p>
                  <p><b>Ingredients:</b></p>
                  <ul style="max-height: 120px; overflow-y: auto; font-size: 14px;">
                    ${ingredients.map((i) => `<li>${i}</li>`).join("")}
                  </ul>
                  <a href="${
                    meal.strYoutube
                  }" target="_blank" class="btn btn-danger btn-sm">📺 Watch Video</a>
                </div>
              </div>
            </div>
          `;
            container.innerHTML += recipeCard;
          });
        } catch (error) {
          console.error(error);
          container.innerHTML = `<p class="text-danger">⚠️ Something went wrong. Please try again later.</p>`;
        }
      }

      function toggleDarkMode() {
        document.body.classList.toggle("dark-mode");
      }
