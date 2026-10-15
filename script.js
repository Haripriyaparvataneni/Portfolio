const filters = document.querySelectorAll('[data-filter]');
filters.forEach(button => button.addEventListener('click', () => {
  filters.forEach(item => { item.classList.toggle('selected', item === button); item.setAttribute('aria-pressed', String(item === button)); });
  document.querySelectorAll('.project').forEach(card => { card.hidden = button.dataset.filter !== 'all' && card.dataset.category !== button.dataset.filter; });
}));
const projects = {
  forecast: {title:'Understanding product demand', sections:[['Business question','How can historical retail data help teams plan product inventory?'],['Approach','Built and tested product-level demand-forecasting models with Scikit-learn and XGBoost. Prepared sales and inventory data with Python, SQL, and Pandas, including data cleaning and feature creation.'],['Evaluation','Evaluated forecasting performance with MAE, RMSE, and MAPE. Stored prepared datasets and model outputs in AWS S3 and used MLflow to track and compare model runs.'],['Tools','Python, SQL, Pandas, Scikit-learn, XGBoost, MLflow, AWS S3.']]},
  assistant: {title:'A conversation with your data', sections:[['Business question','Can users explore sales and inventory data by asking questions in natural language?'],['Approach','Built a prototype GenAI analytics assistant with LangChain, Amazon Bedrock, and Text-to-SQL. The prototype connects natural-language questions with SQL-based exploration of business data.'],['Project scope','This work is a prototype described in my résumé. A public live demo and internal company data are not included here.'],['Tools','LangChain, Amazon Bedrock, Text-to-SQL.']]},
  reporting: {title:'Reports that support decisions', sections:[['Business question','How can retail teams spend less time preparing reports and more time understanding performance?'],['Approach','Built reusable SQL queries and interactive Power BI dashboards to track revenue, product performance, inventory turnover, repeat purchases, and average transaction value.'],['Outcome','Reduced manual reporting time by 25%. Related automation of data cleaning, validation, and feature creation reduced data preparation time by 30%.'],['Tools','SQL, Power BI, Excel, Python, Pandas.']]},
  patterns: {title:'Finding patterns in customer behavior', sections:[['Customer segmentation','Applied RFM analysis and K-Means clustering to segment customers by recency, frequency, and spending, helping stakeholders understand purchasing patterns.'],['Anomaly detection','Prototyped Isolation Forest models to flag unusual sales patterns, inventory mismatches, unexpected revenue changes, and data-quality issues for review.'],['How the work was used','Partnered with business and technical teams to review analytical findings. Anomaly flags supported review rather than being presented as confirmed errors.'],['Tools','Python, Pandas, RFM analysis, K-Means, Isolation Forest.']]},
  serving: {title:'Serving models as APIs', sections:[['Business question','How do trained models reach users and other systems reliably?'],['Approach','Built a FastAPI service that loads a trained model and exposes prediction endpoints with Pydantic request validation, automated tests, and a Docker image for deployment.'],['Project scope','Portfolio demonstration built with synthetic data; not production employer code.'],['Tools','FastAPI, Pydantic, Pytest, Docker.']]}
};
const dialog = document.getElementById('project-dialog');
document.querySelectorAll('[data-project]').forEach(button => button.addEventListener('click', () => {
  const project = projects[button.dataset.project];
  document.getElementById('dialog-title').textContent = project.title;
  const body = document.getElementById('dialog-body'); body.replaceChildren();
  project.sections.forEach(([heading, text]) => { const h = document.createElement('h3'); h.textContent = heading; const p = document.createElement('p'); p.textContent = text; body.append(h,p); });
  dialog.showModal();
}));
document.querySelector('.close-dialog').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if(event.target === dialog) { const r=dialog.getBoundingClientRect(); if(event.clientX<r.left || event.clientX>r.right || event.clientY<r.top || event.clientY>r.bottom) dialog.close(); }});
document.getElementById('copy-email').addEventListener('click', async () => { const status=document.getElementById('copy-status'); try { await navigator.clipboard.writeText('haripriyapcareers@gmail.com'); status.textContent='Email copied.'; } catch { status.textContent='haripriyapcareers@gmail.com'; } });
document.getElementById('year').textContent = new Date().getFullYear();
