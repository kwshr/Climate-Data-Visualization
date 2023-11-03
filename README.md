# Data Visualization with p5.js

This is a simple data visualization project using the p5.js library. It allows you to select a column from a CSV file and visualize the data as a dynamic line chart. The chart will animate over time, displaying data points for each year from 1880 to 2022.

## Project Overview

In this project, we load a CSV file ('data/data.csv') that contains historical data, and then select a specific column from this data for visualization. The selected column is chosen from a dropdown menu, and the visualization is animated over time.

## Getting Started

To run this project, you'll need to have the p5.js library installed and host the project on a web server due to security restrictions when loading files. Follow these steps:

1. Download the p5.js library from [p5.js website](https://p5js.org/) and include it in your project.

2. Create a 'data' folder and place your CSV file ('data.csv') inside it. Make sure the CSV file has a header row.

3. Create an HTML file and include the p5.js library

4. Create a 'sketch.js' file and copy the provided code into it.

5. Set up a local web server or use an online code editor to view the visualization. You can use tools like Visual Studio Code with the Live Server extension or p5.js Web Editor.

## Usage

- Open your web server and access the HTML file you created.

- You'll see a dropdown menu at the top that allows you to select a column from the CSV data.

- After selecting a column, the visualization will start, animating from 1880 to 2022. You can control the animation speed with the `frameRateValue` variable in the code.

- The chart displays data points over time, and you will hear audio cues when the data is positive or negative.

### Customization

You can customize this project by changing the CSV data, the audio files, or the way the visualization is presented. You can modify the variables like `frameRateValue`, colors, and styling in the code to suit your preferences.

### Credits

- This project is built with the p5.js library.

- Data for visualization is loaded from a CSV file.

### License

This project is provided as-is with no warranties. You are free to use, modify, and distribute it according to the p5.js library's license terms.

