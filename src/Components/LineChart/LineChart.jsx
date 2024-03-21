/* eslint-disable react/no-unknown-property */
import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';
const LineChart = () => {


        const mathMarksData = [
          {"name": "John", "math_marks": 85},
          {"name": "Emily", "math_marks": 78},
          {"name": "Michael", "math_marks": 92},
          {"name": "Jessica", "math_marks": 70},
          {"name": "David", "math_marks": 88},
          {"name": "Sophia", "math_marks": 95},
          {"name": "James", "math_marks": 82},
          {"name": "Olivia", "math_marks": 79},
          {"name": "Alexander", "math_marks": 83},
          {"name": "Emma", "math_marks": 75}
        ]
      

    return (
        <div >
            <LChart  width={800} height={400} data={mathMarksData}>
                <XAxis dataKey={"name"}></XAxis>
                <YAxis></YAxis>
                <line  datakey="math_marks"></line>
            </LChart>
        </div>
    );
};

export default LineChart;