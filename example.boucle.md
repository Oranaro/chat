```javascript
<section>
	<div class="cards">
		<% data.forEach((recette) => { %>
			<div class="cards__item">
				<li>Nom recette: <span><%= recette.title %></span></li>
				<p>Ingrédients:</p>
				<ul>
					<% recette.ingredients.forEach((ingredient) => { %>
						<li><%= ingredient.name %> : <%=ingredient.grams%></li>
					<%}) %>
				</ul>
			</div>
		<% }); %>
	</div>
</section>
```
