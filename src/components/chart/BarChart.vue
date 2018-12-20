<script>
import { Bar } from "vue-chartjs";

export default {
  extends: Bar,
  data() {
    return {
      chartdata: {
        datacollection: {
          labels: ["员工1", "员工2", "员工3", "员工4", "员工5", "员工6"],
          datasets: [
            {
              label: "订单数量",
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)"
              ],
              
              borderWidth: 1
            }
          ]
        }
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
      }
    };
  },
  mounted() {
    this.renderChart(this.chartdata.datacollection, this.options);
  }
};
</script>
