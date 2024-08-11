// 定义所需变量
let students = {};
let student_name = "";
let student_id = -9999999999;
let math_score = -1;
let english_score = -1;
let chinese_score = -1;

let analyze_result = "";

// 获取按钮和输入框的引用
var getInputScoreBtn = document.getElementById('inputScoresBtn');   // 录入成绩
var getQueryScoreBtn = document.getElementById('queryScoresBtn');   // 查询成绩
var getclearAnalysisBtn = document.getElementById('clearAnalysisBtn');   // 清除已有的分析
var getExportScoreBtn = document.getElementById('exportScoresBtn');   // 导出成绩


var userInput_name = document.getElementById('student_name');
var userInput_id = document.getElementById('student_id_input');
var userInput_MathScore = document.getElementById('student_Math_score');
var userInput_EngScore = document.getElementById('student_English_score');
var userInput_ChinsesScore = document.getElementById('student_Chinese_score');

// 为按钮添加点击事件监听器

// 录入成绩
getInputScoreBtn.addEventListener('click', function() {
    // 获取输入框的值
    student_name = userInput_name.value;
    student_id = userInput_id.value;
    math_score = userInput_MathScore.value;
    english_score = userInput_EngScore.value;
    chinese_score = userInput_ChinsesScore.value;

    // 将数据存储到变量students中
    students[student_id] = {
        name : student_name,
        scores : {
            '数学' : math_score,
            '英语' : english_score,
            '语文' : chinese_score
        }
    };

    // 清空表单
    document.getElementById('student_input_form').reset();
    alert('学生信息录入成功！');
    
});

// 查询成绩
getQueryScoreBtn.addEventListener('click', function() {
    const searchId = document.getElementById('student_id_query').value;
    const the_student = students[searchId];

    if (the_student)
    {
        var scores = the_student['scores'];
        // 先将字符串格式转化为数据格式
        const scoreValues = Object.values(scores).map(score => parseFloat(score));
        // 获取最大分数和最小分数
        const maxScore = Math.max(...scoreValues);
        const minScore = Math.min(...scoreValues);

        // 找到最大分数对应的科目
        const maxSubject = Object.keys(scores).find(key => parseFloat(scores[key]) === maxScore);
        // 找到最小分数对应的科目
        const minSubject = Object.keys(scores).find(key => parseFloat(scores[key]) === minScore);

        // 计算平均分
        const averageScore = scoreValues.reduce((acc, curr) => acc + curr, 0) / scoreValues.length;

        document.getElementById('analysisResult').innerHTML = `\
        <p>平均分：${averageScore.toFixed(2)}<br>\
        最大分数对应的科目: ${maxSubject}，其分数为 ${maxScore.toFixed(2)} <br>\
        最小分数对应的科目: ${minSubject}，其分数为 ${minScore.toFixed(2)} </p>`
    }
    else
    {
        document.getElementById('analysisResult').innerHTML = '查无此人！';
    }

});

// 清除网页内显示的查询分析结果
getclearAnalysisBtn.addEventListener('click', function() {
    document.getElementById('analysisResult').innerHTML = '';
});

// 导出学生成绩信息到CSV文件
getExportScoreBtn.addEventListener('click', function() {
     // 准备CSV文件的头部
     let csvContent = "学号,姓名,数学成绩,英语成绩,语文成绩\n";

     // 遍历students对象
     for (const studentId in students) {
         if (students.hasOwnProperty(studentId)) {
             const student = students[studentId];
             const scores = student.scores;
             // 将学生信息添加到CSV内容
             csvContent += `${studentId},${student.name},${scores['数学']},${scores['英语']},${scores['语文']}\n`;
         }
     }

    // 编码CSV内容 
    // "\ufeff"解决中文乱码问题，此时编码为"UTF-8-BOM"，在Windows下用Excel软件打开后可正常显示
    const blob = new Blob(["\ufeff"+csvContent], {type:'text/csv,charset=UTF-8'});

    // 创建下载链接
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "students-grades.csv"; // 下载文件名

    // 模拟点击下载
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
 
});