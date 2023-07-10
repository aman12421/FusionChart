import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import ReactNativeFusionCharts from 'react-native-fusioncharts';
export default class MultiSeriesColumn2D extends Component {
  constructor(props) {
    super(props);
    // STEP 2- Define the categories representing the labels on the X-axis
    const categories =  [
      {
        "category": [
          { "label": "Q1" },
          { "label": "Q2" },
          { "label": "Q3" },
          { "label": "Q4" }
        ]
      }
    ]
    //Construct the dataset comprising multiple series
    const dataset = [
      {
        "seriesname": "Previous Year",
        "data": [
          { "value": "12000" },
          { "value": "10500" },
          { "value": "23500" },
          { "value": "16000" }
        ]
      },
      {
        "seriesname": "Current Year",
        "data": [
          { "value": "24400" },
          { "value": "29800" },
          { "value": "20800" },
          { "value": "26800" }
        ]
      }
    ]
    //STEP 3 - Chart Configurations
    const chartConfig = {
      type: "mscolumn2d",
      width: "100%",
      height: "400",
      dataFormat: "json",
      dataSource: {
        "chart": {
          "theme": "fusion",
          "caption": "Comparison of Quarterly Revenue",
          "xAxisname": "Quarter",
          "yAxisName": "Revenues (In USD)",
          "numberPrefix": "$",
          "plotFillAlpha": "80",
          "divLineIsDashed": "1",
          "divLineDashLen": "1",
          "divLineGapLen": "1"
        },
        "categories": categories,
        "dataset": dataset,

      }
    };
    this.state = {chartConfig};
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>A Multi-Series Column 2D Chart</Text>
        <View style={styles.chartContainer}>
          <ReactNativeFusionCharts
            chartConfig={this.state.chartConfig}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    padding: 10
  },

  header: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    paddingBottom: 10
  },

  chartContainer: {
    height: 400,
    borderColor: "#000",
    borderWidth: 1
  }
})