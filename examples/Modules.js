import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import ReactNativeFusionCharts from "react-native-fusioncharts";
 
export default class App extends Component {
  constructor(props) {
    super(props);
 
    const chartConfig = {
      type: "gantt", // your chart type goes here
      width: "100%",
      height: "400",
      dataFormat: "json",
      dataSource: { // your data goes here
        // for gantt chart data please visit https://www.fusioncharts.com/dev/chart-attributes/gantt
      }
    };  
    this.state = {
      chartConfig
    };
  }
 
  render() {
    const modules = ['gantt']; // module names goes here
    return (
      <View style={styles.container}>
        <View style={styles.chartContainer}>
          <ReactNativeFusionCharts
            chartConfig={this.state.chartConfig}
            modules={modules}
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
 
  chartContainer: {
    height: '60%',
    borderColor: "#000",
    borderWidth: 1
  }
})