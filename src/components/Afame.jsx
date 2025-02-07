import React from 'react'

function Afame() {
  return (
    <div className="max-w-3xl mx-auto p-8 bg-white shadow-lg rounded-lg text-black">
      <h1 className="text-4xl font-bold mb-6">Unraveling Global COVID-19 Trends and Predicting Life Expectancy: A Data Analyst’s Journey at Afame Technologies</h1>
      
      <p className="text-lg text-gray-700 mt-4">
        The role of a data analyst is often described as bridging the gap between raw data and actionable insights. At Afame Technologies, I had the opportunity to dive deep into a high-impact project focused on Global COVID-19 Data Analysis and Visualization, alongside an ambitious endeavor to develop a machine learning model for predicting life expectancy with remarkable accuracy (~95%). This experience was not just about coding and crunching numbers—it was about transforming complex data into meaningful narratives that could drive decision-making.
      </p>
      
      <h2 className="text-2xl font-semibold mt-6">Breaking Down the Problem Statement</h2>
      <p className="text-lg text-gray-700 mt-2">
        The COVID-19 pandemic brought an overwhelming influx of data from diverse sources—government agencies, medical institutions, and global health organizations. However, raw numbers alone do not tell a story unless properly structured and analyzed. Our goal was twofold:
      </p>
      
      <ul className="list-disc list-inside text-lg text-gray-700 mt-2">
        <li>Develop a robust data analysis and visualization pipeline to uncover trends in COVID-19 cases, recoveries, and deaths across multiple countries.</li>
        <li>Create a machine learning model capable of predicting life expectancy by identifying key social, economic, and healthcare factors affecting longevity.</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mt-6">Step 1: Data Collection & Preprocessing</h2>
      <p className="text-lg text-gray-700 mt-2">
        The backbone of any data-driven project is the quality of data. The COVID-19 dataset contained millions of records from sources like Johns Hopkins University, WHO, and government health agencies. Similarly, life expectancy data was aggregated from UN reports, World Bank statistics, and national health registries.
      </p>
      
      <h3 className="text-xl font-semibold mt-4">Challenges Encountered:</h3>
      <ul className="list-disc list-inside text-lg text-gray-700 mt-2">
        <li>Data inconsistency: Different sources reported COVID-19 numbers at different times and with varying formats.</li>
        <li>Missing values: Some countries lacked complete health records, requiring imputation techniques.</li>
        <li>Feature selection: Identifying the most influential variables for life expectancy prediction.</li>
      </ul>
      
      <h3 className="text-xl font-semibold mt-4">Techniques Used:</h3>
      <ul className="list-disc list-inside text-lg text-gray-700 mt-2">
        <li>Data Cleaning: Used Pandas and NumPy to handle missing values, normalize data, and remove duplicates.</li>
        <li>Feature Engineering: Created new variables such as healthcare spending per capita, air pollution levels, and vaccination rates to improve predictive power.</li>
        <li>Time-Series Analysis: Modeled the trajectory of COVID-19 cases over time using moving averages and exponential smoothing.</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mt-6">Step 2: Data Analysis & Visualization</h2>
      <p className="text-lg text-gray-700 mt-2">
        Once the data was structured, the next step was to derive meaningful insights through visualization. Using Matplotlib, Seaborn, and Plotly, I created interactive dashboards and heatmaps that highlighted key trends.
      </p>
      
      <h3 className="text-xl font-semibold mt-4">Key Insights Discovered:</h3>
      <ul className="list-disc list-inside text-lg text-gray-700 mt-2">
        <li>Lockdowns and Case Trends: Countries that implemented early lockdowns saw a significant flattening of the curve compared to those with delayed responses.</li>
        <li>Vaccination Impact: Areas with high vaccination rates had drastically lower mortality rates, reinforcing the importance of mass immunization.</li>
        <li>Economic Factors & Life Expectancy: Higher GDP per capita and better healthcare access were strongly correlated with increased life expectancy.</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mt-6">Step 3: Building a Predictive Machine Learning Model</h2>
      <p className="text-lg text-gray-700 mt-2">
        The next challenge was developing a machine learning model that could accurately predict life expectancy based on socioeconomic and healthcare indicators.
      </p>
      
      <h3 className="text-xl font-semibold mt-4">Model Selection Process:</h3>
      <ul className="list-disc list-inside text-lg text-gray-700 mt-2">
        <li>Baseline Model: Started with a simple Linear Regression to establish a benchmark.</li>
        <li>Feature Engineering: Removed redundant variables, applied log transformations, and handled outliers.</li>
        <li>Advanced Models: Tested multiple approaches including Random Forest, Gradient Boosting (XGBoost), and Neural Networks.</li>
      </ul>
      
      <h3 className="text-xl font-semibold mt-4">Best Performing Model:</h3>
      <p className="text-lg text-gray-700 mt-2">
        🏆 Gradient Boosting (XGBoost)—achieved ~95% accuracy, outperforming traditional regression models.
      </p>
      
      <h2 className="text-2xl font-semibold mt-6">Step 4: Deploying & Communicating Results</h2>
      <p className="text-lg text-gray-700 mt-2">
        A model is only as good as its usability. The final step was deploying the model and communicating findings effectively.
      </p>
      
      <h3 className="text-xl font-semibold mt-4">Key Takeaways & Learnings</h3>
      <ul className="list-disc list-inside text-lg text-gray-700 mt-2">
        <li>Data is powerful, but context is key—Numbers alone don’t tell a story; proper analysis makes them actionable.</li>
        <li>Feature selection makes or breaks a model—Identifying relevant predictors significantly boosts accuracy.</li>
        <li>Machine Learning in healthcare has real-world impact—From pandemic forecasting to life expectancy estimation, ML models can drive critical decisions.</li>
      </ul>
    </div>
  )
}

export default Afame