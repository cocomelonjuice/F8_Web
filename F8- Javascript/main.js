/*let modArray = [
    'pod','gel'
];
console.log(modArray);

console.log(typeof modArray); /*kiểm tra kiểu dữ liễu dùng typeof */ */


//console.log("haha");
//alert("Yeah boi");

//dùng let , const thay cho var //
 
/*xong vdieo 6*/
/* xong vidoe 7 các hàm built-in như alert, console, confirm, prompt, set timeout, set interval...*/
/* xong video 8*/
/*xong video 9*/
/*xong vidoe 10 : CHÚ Ý : Toán tử ++ -- với tiền tố & hậu tố ví dụ chi tiết*/
/* xong vidoe 11*/
/* xong  vidoe 12 nối chuỗi */
/* xong vidoe 13-14-15 : các giá trị 0, false, '' ( chuỗi rõng), undefined, NaN, null khi chuyển qua
kiểu bolean sẽ là False, còn nếu ko thuộc các trên thì là True, kể cả char*/
/* xong video 16- 17 -18: so sánh kiểu dữ liệu với nhau dùng === ( ví dụ nếu 
    console.log(1==="b" thì ra false vì không cùng kiểu dữ liệu, tương tự !==)
    nhưng chú ý  console.log('1'==1) thì ra TRUE, hiểu đơn giản ==, !== thì chỉ so sánh giá trị không so sánh
    kiểu dữ liệu, còn ===, !== thì chỉ so sánh kiểu dữ liệu có gióng nhau không*/
/* xong 19 kiểm tra điều kiện &&  và || và if nâng cao*/
/* xong 20 chuỗi : chú ý muốn in ra dấu '' trong chuỗi thì thêm \ \ ví dụ 'haha\'\'', tương tự với "", còn
muốn in ra dấu / thì ghi  dấu // */
    /*let fullname="dấdasdasdasd"+
    +  "adasdadadasd"; */ /*làm cách này để xuống dòng, hoặc xuống dòng
    ngày đầu string */ 

    /*muốn cộng string có thể làm theo cách ES6 gọi là
    template string sau: let fullname= ${firstname}* ${lastname}/

/* xong vidoe 21
let myString="aaaa";
    1. Length
    myString.length;
    2. Find index
    myString.indexOf('', );
    myString.lastindexOf('');
    myString.search('');
    3. Cut string
    myString.slice(vị trí bắt đầu, vị trí kết thúc);
    ( nếu cắt ngược thì xài số âm)
    4. Replace
    myString.replace('','');
    5. Convert to upper/lower case
    myString.toUpperCase() / myString.toLowerCase();
    6. Trim ( cắt bớt ký tự thừa)
    myString.trim()
    ( lấy độ dài sau khi trim : myString.trim().length)

    7. split ( cắt chuỗi thành các array)
    myString.split()
    ( tách nhờ tìm các điểm chung , từ đó tách ra)

    8. Get a character by index
    myString.charAt(vị trí cần get);
*/

/* xong vidoe 22
    giá trị Number ( số ) javascript number method
        let bien_so= new Number (); ( lưu ý cách new Number này
        ko xài vì rườm rà và nó tạo ra kiểu dữ liệu object không mong muốn
        bên tab console f12)

         kiểm tra isNaN();
    
    .to string() chuyển number thành string
    .to Fixed() làm tròn số thập phân và chuyên thành kiểu string
        , mặc định ko ghi thì là (0)
*/

/* xong video 23 Array 
    Array có thể chứa cùng lúc nhiều kiểu dữ liệu
    let newArr= []; hoặc let newArr= new Array(); ( tượng tự ko khuyến cáo cách này như ở number)
    
    .length();
    để index thì ten_mang[trong đây là vị trí của phần từ ttrong mảng]
*/

/* xong vidoe 24
    .toString();
    .join();từ array thành chuỗi 
    .pop() xóa đi phần từ cuối mảng, trả về phần tử đã xóa và cho kết quả
        là phần từ cũ đã xóa đi phần tử cuối mảng
    .push() thêm phần từ vào cuối mảng, trả về độ dài mới của mảng và cho kết quả
        mảng đã được thêm phần từ mới vào
    .shift() ngược lại .pop() , xóa phần từ đầu mảng và trả về phần từ xóa đó
    .unshift()   giống push nhưng khác là thêm một hoặc nhiều ptu vào đầu mảng, và trả về các pt đó
    .splicing ( , ) xóa và chèn vị trí bất kỳ trong array
    .concat() nối array 
    .slice(, ) cắt bỏ mảng ví dụ cắt từ vị trí 2 hhay [1] tới hết : .string(1)
            hoặc số âm nếu muốn cắt ngược lại (-2, -1)

*/

/* xong video 25 fUNCTION


function newfunc(bien1, bien2) 
{
    console.log(bien1, bien2);
}; // để khai báo hàm

newfunc();// để gọi hàm ra xài 

// tìm hiểu this , template string 
*/


 /* xong vidoe 26 */
    /* argument trong hàm, để thay thế cho việc phải viết quá nhiều khai báo 
    biến lúc đầu cho hàm ở chỗ function newfunc(bien1, bien2, ...)
    thay vào đó ta viết

function newfunc(){
    console.log(arguments);
}

newfunc(1,2,3,4,5,6,7,8...);
     nhờ arguments , ta có thể truyền nhiều giá trị vào hàm mà 
    không cần tốn công khai báo số lượng biến nhiều tương ứng với số lượng 
    giá trị  nhập vào, lúc này arguments là đối tượng object
    
 vòng for of 
    for (let tenbien of arguments) {}  */

/* xong video 27 
hàm cần có return nếu không sẽ trả về undefined
*/

/* xong video 28*/
/* x0ng video 29
        3 kiểu hàm trong Js
    1. Declration function: là giống các cách khai biến hàm của các vidoe trước
    2. Expression function: 
        let func1 = function(){}
        setTimeout(function(){})  nếu muốn có thể đặt tên sau chữ function để dễ hiểu 
        let tenObject ={ 
            myfunc1: function();
        }
    3. Arrow function
    */

    /* xong video 30 polyfill 
    
    includes() để xem liệu một chuỗi có được tìm thấy trong chuỗi khác hay không
    và sẽ trả về TRUE/ FALSE
    */

    /* xong video 31 object 
        để gán hay thay đổi , thêm xóa giá trị cho 1 thuộc tính của object
        ta làm ví dụ: ten_object.ten_thuoctinh='chuỗi' hoặc số ;   
         delete ten_object.ten_thuoctinh

        muốn đặt tên các thuộc tính vi phạm quy tắc đặt tên ví dụ ten-la thì ghi là 'ten-la'

        để lấy value của thuộc tính ra ngoài thì tương tự console.log(ten_object.ten_thuoctinh)

        function ( phương thức / method ) có thể nằm trong object vis dụ  ten_ham: function(), ta gọi function từ object ra 
        bằng cách console.log(ten_object.ten_ham() )


        */

/* xong video 32
       Object constructor như sau ( có thể xem lại video để hiểu rõ cong dụng của cái này)

       function User(fName,lName,avatar)//đây là object constructor, kiểu như là 1 khung để các hàm khác truyền giá trị vào
       { 
        this.fName=firstName;
        this.lName=lastName;
        this.avatar=avatar; // các this này đang chỉ object constructer User bên trên
       }

       let author = new User('Sơn','Đặng', 'Avatar');  
       let user= new User('Vũ', 'Nguyễn', 'Avatar');
       // giải thích: khi 2 hàm trên có các giá trị truyền vào object constructor , thì sẽ tạo ra object chứa giá trị
       mà 2 hàm trên truyền vào, khi console.log (author) hay console.log(user) sẽ ra từng đối tượng obejct chứa giá trị
       của từng 2 hàm trên.

        author.title='Chia sẻ' ; user.comment='Bình luận'//đây là cách thêm thuộc tính cho các đối tượng đã được truyền giá trị từ hàm khác vào
*/

/*xong video 33 
Object prototype , nếu object constructor là ngôi nhà thì Object prototype sẽ là các đối tượng của ngôi nhà
// xem thêm so sánh object prototype và this

*/

/*xong video 34
       hàm date() để hiện thời gian hiện tại      
*/

/* xong video 35 if else*/
/*xong video 36 switch , sẽ thực hiện khi có 1 case đúng rồi thực hiện tiếp các case sau dù sai hay đúng
, cho đến khi có lệnh break chứ không phải chỉ thực hiện case đúng*/

/*xong video 37 ternary operator toán tử 3 ngoi
    ví dụ: 
    let a=1; let b=1;
    let c=a>0 ? a:b; nghĩa là nếu giá trị a>0 thì c=a, còn nếu a<0 thì c=b
    phép lấy giá trị '${}' template strings
*/

/*xong video 38 loop vòng lặp
    gồm
        1. for - lặp với điều kiện đúng
        2. for/in - lặp qua key của đối tượng như array, object, string
        3. for/of - lặp qua value của đối tượng như array, object, string
        4. while - lập khi điều kiện đúng
        5. do/while - lặp ít nhất 1 lần, sau đó lặp khi điều kiện đúng
*/

/* xong video 39 -40 -41 vòng lặp for
       chú ý vòng lặp voo hạn gây treo trình duyệt
       ví dụ : in ra tất cả phần tử trong mảng
            let myArray=[
             'a',
             'b',
             'c'
            ];
            let Arraylength= myArray.length; // lấy độ dài chuỗi và lưu vào biến
            for ( let i=0; i<Arraylength; i++ ){
             console.log(myArray[i]);
                }
       ví dụ: in ra phần tử cuối cùng trong mảng
            let myArray=[
                'a',
                'b',
                'c'
            ];
            let Arraylength= myArray.length; // lấy độ dài chuỗi và lưu vào biến
            console.log(myArray[myArray.length -1 ])
			còn để in ra phần tử đầu tiên thì : console.log(myArray[0]);
*/
/* xong video 42 for in có định dạng: for (... in ...)
        trong C++ : class là khung chứa khai báo các thuộc tính, còn object là class ( khung ) đã chứa nội dung
        
        ví dụ trong object ( key là tên đặt tùy ý , có thể đặt: key, tên tùy ý...)
            ở đây gọi key là ten_khoa
        + Để lấy key trong object
        let myArray={
            name: 'A',
            age: 18,
            address: 'B'
        };
        for (let ten_khoa in myArray){
            console.log(ten_khoa) // giá trị của ten_khoa lúc này là chuỗi 
        };
        + Để lấy value của key trong object
        for (let ten_khoa in myArray){
            console.log(myArray[ten_khoa]);
        };

        ví dụ trong array
        + Để lấy key trong array
        let languages=[
            'Eng', 'Jap', 'Vie'
        ];
        for ( let key in languages){
            console.log(key); // giá trị key lúc này là số (0,1,2...) nên in ra 0,1,2
        }
        + Để chuyển lại từ số (0,1,2 ...) trong array về lại giá trị hiển thị của array
        for ( let key in languages){
            console.log(languages[key]); // giá trị key lúc này là chuỗi Eng Jap Vie
        }

        ví dụ trong chuỗi string
        + Để lấy key trong string
        let myString='abcd';
        for ( let key in myString){
            console.log(key) // lúc này key có giá trị là số (0,1,2...) nên in ra 0,1,2
        }
        + Đê chuyển lại từ số (0,1,2 ...) trong string về lại giá trị hiển thị của string
        console.log(myString[key]);
*/

/* xong video 43 for/of
        for ( let giatri of chuỗi/mảng){
            console.log(giatri)
        }
        ==> khi đó sẽ in ra từng giá trị của chuỗi/ mảng

        for of nếu muốn dùng cho object thì
        + cách 1: lấy keys ( bắt buộc ghi là keys) của object để chuyển onhect về dạng mảng
        theo cú pháp Object.keys ( bắt buộc ghi vầy)
            for (let giatri of Object.keys(ten_object)){
                console.log(giatri)
                }
            để lấy value của các key ra thì 
                for (let giatri of Object.keys(ten_object)){
                console.log(ten_object[giatri]);
                }
        + cách 2: để lấy value của các key ra thì
                theo cú phaps Object.values
            for (let giatri of Object.values(ten_object)){
                console.log(giatri);
                }
        chuyển object thành mảng thì : console.log(Object.values(ten_object));
*/

/*xong video 44  while
                while để in ra các phần từ mảng
                    let myArr=[
                        'A',
                        'B',
                        'D',
                        ];

                    let i=0;
                    while(i < myArr.length){
                        console.log(myArr[i]);
                        i++;
                    };              
*/

/*xong video 45  do/while, chạy do rồi mới kiểm tra while*/
/*xong video 46 break, continue trong loop */
/* xong video 47 -48 ví dụ thêm loop
            VD: in ra các phần tử trong các  mảng con
                    let myArr=[
                        [1,2],
                        [3,4],
                        [5,6],
                    ]
                    for (let i=0; i< myArr.length; i++){// vòng for để duyệt in ra 3 mảng 
                        con [1,2] [3,4] [5,6], có i< myArr.length vì điều kiện i không được lớn hơn chiều dài mảng (lớn hơn số lượng mảng con)
                        
                        for ( let j=0; j < myArr[i].length; j++) // vòng for để duyệt qua từng mảng con để in 
                        ra giá trị phần từ trong mảng con, có j < myArr[i].length vì điều kiện j không được lớn hơn chiều dài từng mảng con ( lớn hơn số lượng các phần từ trong mảng con) 
                            {
                                console.log(myArr[i][j]);// khi vòng for j chạy xong với j=0,1 để in ra các phần từ trong mảng con thứ i=0, sau đó sẽ thoát vonhgf
                                for j ra , chạy vòng for i để có i=1, sau đó vào lại vòng for j với i=1 để in ra tiếp các phần từ trong mảng i=1 với j=0,1 tiếp tụ như vậy
                            }
                    }        
*/

/* xong video 49 Mảng - các hàm duyệt mảng ( array có thể chứa nhiều object)
        forEach(): duyệt qua tất cả phần mảng ( in ra nếu muốn , dùng console.log())
        every()
        some()
        find()
        filter()

        Vd: có mảng tên là courses, chứa các object 
        + Dùng forEach() để duyệt qua từng object trong mảng , sau đó dùng console.log in ra tất cả object
        courses.forEach(function(course, index){
            console.log(course, index);
        }); //cách viết function( course, index ) như trên nghĩa là sẽ duyệt qua toàn bộ
        object trong mảng ( tên course là ghi tùy ý, có thể đặt tên khác tùy thích không cần ghi course)
        và index là số chỉ, bắt buộc ghi nếu muốn duyệt qua số chỉ ( ko được ghi khác)
        // gọi hàm trong for each như vầy gọi là call back
        + Dùng every() ( sẽ trả về boolean true false) để kiểm tra tát cả các phần từ của mảng có thỏa điều kiện 
        nào đó hay không, nếu chỉ cần 1 điều kiện bị sai ở 1 phần tử nào đó, mảng ngừng duyệt, trả về false
        + Dùng some() ( sẽ trả về giống every () true/ false) để kiểm tra một phần từ nào đó trong mảng
        có thỏa điều kiện nào đó không , chỉ cần gặp điều kiện đúng thì sẽ dừng lại và trả về true, không duyệt mảng tiếp nữa
        + Dùng find() để tìm ra phần từ nào thỏa điều kiện , nếu có nhiều phân từ thỏa thì chỉ in ra 1 phần từ
        + Dùng filter() để tìm ra tất cả phần từ thỏa điều kiện kể cả các ptu giống nhau vẫn được in ra
*/