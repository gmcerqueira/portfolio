// eslint-disable-next-line import/extensions
import projects from './projects.js';

const projectsList = document.querySelector('#projects-list');

const createProjectCard = (project) => {
  const card = document.createElement('a');
  card.className = 'project_card';
  card.href = project.path;

  const cardTitle = document.createElement('h3');
  cardTitle.className = 'project_card-title';
  cardTitle.innerHTML = project.name;
  card.appendChild(cardTitle);

  const cardImage = document.createElement('img');
  cardImage.className = 'project_card-cover';
  cardImage.src = project.image;
  cardImage.title = project.description;
  card.appendChild(cardImage);

  projectsList.appendChild(card);
};

projects.map((project) => createProjectCard(project));
