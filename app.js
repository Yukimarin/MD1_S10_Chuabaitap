// Bài 1: Sử dụng vòng lặp để đếm từ 1 đến 100. Khi số là 99, hiển thị hộp thoại thông báo là đã hoàn thành.
// Cách 1: sử dụng vòng lặp for
// B1: tạo ra vòng lặp for (điêm bat dau =1; diem ket thuc <=100; bươc nhay la tăng len 1)
// B2: khi ma diem no nhay =99 thi se hien thi ra 1 alert (mẹnh de dieu kien if)
// for (let i = 1; i < 100; i++) {
//   console.log(`Lần lặp thứ ${i}: ${i}`);
//   if (i == 99) {
//     alert(`Đã hoàn thành ở lần lặp thứ${i}`);
//   }
// }

// Cách 2: Sử dụng vòng lặp while
// let count = 1;
// while (count < 100) {
//   console.log(count);
//   if (count == 99) {
//     alert("Đã hoàn thành");
//   }
//   count = count + 1;
// }

// Bài 2: Hiển thị ra 20 số trong dãy fibonacci đầu tiên.
// Bước 1: Fibonaci => 0 1 1 2 3 5 8 13 21 34 55
// Bước 2: Khai báo các biên number1=0;number2=1, nextNumber
// Bước 3: Sử dụng vòng lặp for để gán lại giá trị của number1, number 2 và nextNumber sau mỗi lần lặp
// let number1 = 0;
// let number2 = 1;
// let nextNumber;
// for (let i = 0; i < 20; i++) {
//   console.log(number1);
//   nextNumber = number1 + number2;
//   number1 = number2;
//   number2 = nextNumber;
// }

// Bài 3: Tìm số đầu tiên trong dãy fibonacci chia hết cho 5.
// Bước 1: Khai báo các biến number1=0, number2=1, nextNumber, state=true
// Bước 2: Sử dụng vòng lặp while để gán lại giá trị cho các biến trên
// Bước 3: Sử dụng mệnh đề điều kiện if để tìm ra số chia hết cho 5, và gán lại state =false (ngưng vòng lặp)
// let number1 = 0;
// let number2 = 1;
// let nextNumber;
// let state = true;
// while (state) {
//   nextNumber = number1 + number2;
//   number1 = number2;
//   number2 = nextNumber;
//   if (number1 % 5 == 0) {
//     console.log(number1);
//     state = false;
//   }
// }

// Bài 4: Tính tổng của 20 số đầu tiên trong dãy fibonacci.
// BƯớc 1: Khai báo các biến number1; number2;nextNumber và biến sum =0
// Bước 2: In ra được dãy fibonaci
// Bước 3: Sử dụng vòng lặp for để gán lại giá trị cho biến sum sau mỗi lần lặp
// let number1 = 0;
// let number2 = 1;
// let nextNumber;
// let sum = 0;

// for (let i = 0; i < 20; i++) {
//   sum = sum + number1;
//   // Lần 1 - i=0 : sum = 0 - number1= 0 =>sum = 0
//   // lần 2 i=1 : sum =0  -number1= 1 => sum =1
//   // Lần 3 i=2 : sum =1 - number1=1 => sum=2
//   console.log(`Lần thứ ${i + 1}-i=${i}:${sum} - ${number1}`);
//   nextNumber = number1 + number2;
//   number1 = number2;
//   number2 = nextNumber;
// }
// console.log(sum);

// Bài 5: Tính tổng của 30 số chia hết cho 7 đầu tiên trong các số tự nhiên.
// Bước 1: Khai báo biến sum =0; count=0; i =0
// Bước 2: Sử dụng vòng lặp while với điều kiện là count<30
// Bước 3: Sử dụng mệnh đề điều kiện if với điều kiện chia hết cho 7 thì mọi người gán lại sum và cộng count lên 1 đơn vị
// let sum = 0;
// let i = 0;
// let count = 0;
// while (count < 3) {
//   if (i % 7 == 0) {
//     sum = sum + i;
//     count = count + 1;
//   }
//   i = i + 1;
// }
// console.log(sum);

// Bài 6: Hãy viết một chương trình in
// ra các số từ 1 đến 100. Nhưng nếu số chia
// hết cho 3 thì in ra "Fizz", 5 thì in ra "Buzz"
// thay vì in ra số đó. Và nếu số đó chia hết cho cả
// 3 và 5 thì in ra chữ "FizzBuzz".
// Bước 1: Sử dụng vòng lặp for
// Bước 2: Sử dụng mệnh đề điều kiện if để chia các trường hợp
// for (let i = 1; i < 100; i++) {
//   if (i % 3 == 0 && i % 5 == 0) {
//     console.log(`${i}-FizzBuzz`);
//   } else if (i % 3 == 0) {
//     console.log(`${i}-Fizz`);
//   } else if (i % 5 == 0) {
//     console.log(`${i}-Buzz`);
//   } else {
//     console.log(i);
//   }
// }

// Bài 7: Tính giai thừa của một số nguyên dương
// let input = Number(prompt("Nhập vào một số bất kỳ"));
// let giaithua = 1;
// // console.log(Number.isInteger(input));
// if (input > 0 && Number.isInteger(input) == true) {
//   for (let i = 1; i <= input; i++) {
//     giaithua = giaithua * i;
//   }
//   console.log(giaithua);
// } else {
//   console.log("Đây không phải là số nguyên dương");
// }
