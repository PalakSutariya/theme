Usefull info

Function:-  controller/s_admin/setting_controller/truncate_database : when add new table in database

Codeignitor version
echo CI_VERSION;



1) merge each single array in loop. (merge)
https://stackoverflow.com/questions/13544985/merge-multiple-arrays-from-one-array

==================================================================================================
3) SAAS LINK :
    - https://docs.microsoft.com/en-us/search/?terms=saas%20meaning&skip=10
    - https://stackoverflow.com/questions/50604355/codeigniter-saas-app-dynamic-database-selection-on-cli-cron-job
    - http://anantgarg.com/2013/06/10/build-a-php-saas-app-from-scratch/
    - https://docs.microsoft.com/en-us/azure/azure-sql/database/saas-tenancy-app-design-patterns?view=azuresql
    - https://www.youtube.com/watch?v=jjNmcKBVjrc&t=1s&ab_channel=MicrosoftIgnite

https://medium.com/@bkintanar/eb4e8c5b5cc2

==================================================================================================
4) For search single id into multiple Ids store in DB comma seprated.
$this->db->where('FIND_IN_SET("' . $level_id . '", c.level_id) > 0');

- check multiple id in mutlitple id - avoid multiple find in set

https://pritomkumar.blogspot.com/2018/06/mysql-findinset-sith-multiple-search.html

CONCAT(",", company_id, ",") REGEXP ",(2|1|1|2),"


==================================================================================================
5) Chat interface Channel : 
    - https://www.youtube.com/c/webslesson
    - https://www.youtube.com/playlist?list=PLxl69kCRkiI2FTXaqxZbKrPMOSQn54nY7

1 : https://www.youtube.com/watch?v=1E4qteGUwrQ&ab_channel=Webslesson
2: https://www.youtube.com/watch?v=m1Mdlie5cR0&ab_channel=Webslesson
3: https://www.youtube.com/watch?v=TK8-PzPOEuE&ab_channel=Webslesson
4: https://www.youtube.com/watch?v=oJ4vT1e61P0&ab_channel=Webslesson
5: https://www.youtube.com/watch?v=g3Cb7Gi0gwU&list=PLxl69kCRkiI2FTXaqxZbKrPMOSQn54nY7&index=5&ab_channel=Webslesson
6: https://www.youtube.com/watch?v=UbdzTLEDKZw&list=PLxl69kCRkiI2FTXaqxZbKrPMOSQn54nY7&index=6&ab_channel=Webslesson
7: https://www.youtube.com/watch?v=zC_yRh7cPcQ&list=PLxl69kCRkiI2FTXaqxZbKrPMOSQn54nY7&index=7&ab_channel=Webslesson
8: https://www.youtube.com/watch?v=TucP6IhnD-g&list=PLxl69kCRkiI2FTXaqxZbKrPMOSQn54nY7&index=8&ab_channel=Webslesson
9: https://www.youtube.com/watch?v=F1ufZ9NZK_o&list=PLxl69kCRkiI2FTXaqxZbKrPMOSQn54nY7&index=9&ab_channel=Webslesson
10: https://www.youtube.com/watch?v=mLANJmJ1ya0&list=PLxl69kCRkiI2FTXaqxZbKrPMOSQn54nY7&index=10&ab_channel=Webslesson
11: https://www.youtube.com/watch?v=RXIfCUBxn_o&list=PLxl69kCRkiI2FTXaqxZbKrPMOSQn54nY7&index=11&ab_channel=Webslesson
12: https://www.youtube.com/watch?v=l58f8FaLG2c&list=PLxl69kCRkiI2FTXaqxZbKrPMOSQn54nY7&index=12&ab_channel=Webslesson



=================================================================================================
6) Get Post data in postmanin CI3
->  file_get_contents("php://input");


whatsAppChat Icon -> https://www.iconpacks.net/free-icon/whatsapp-103.html

=================================================================================================
7) Mouse scroll up event
https://stackoverflow.com/questions/4326845/how-can-i-determine-the-direction-of-a-jquery-scroll-event


=================================================================================================
8) response from backend in ajax call
var response = $.parseJSON(response);

=================================================================================================
9) if need to add queryString and remove

function ChangeUrl(title, url) {
    if (typeof(history.pushState) != "undefined") {
        var obj = {
            Title: title,
            Url: url
        };
        history.pushState(obj, obj.Title, obj.Url);
    } else {
        alert("Browser does not support HTML5.");
    }
}

Access QueryString value and generate click event from their value
var has_conversation_route = "<?php echo $_GET['conversation_id']; ?>";

if(has_conversation_route != ''){
    var title = $("title").text();
    var change_url = "<?php echo base_url('admin/chatbox') ?>";
    ChangeUrl(title, change_url);

    $("<?php echo '.' . $_GET['conversation_id']; ?>").click();
}



=================================================================================================
10) Get html content from TextArea into Post data and add new line
$updates_arr = preg_split('/\r\n|[\r\n]/', $updates);


=================================================================================================
11)install express & Socket.io:

npm install express --save
npm install socket.io --save


=================================================================================================

13) hide calendar on select date
$('#billing-start-date-' + value).datepicker({
    language: 'en',
    dateFormat: 'dd/mm/yyyy',
    autoclose: true,  // using this
    onSelect : function(){
        $('#datepickers-container .datepicker').removeClass('active')  // using this
    }
});

================================================================================================
14) replace \n with <br>
$text_messge = nl2br($temp['text']);


================================================================================================
15) Array chunk

- https://stackoverflow.com/questions/25540355/php-how-to-split-array-into-2-parts


16) Cast
==============================================================================================
SELECT invoice.*, CAST(invoice.due as decimal(10, 2)) as due, CAST(invoice.amount as decimal(10, 2)) as amount, student.student_id, CONCAT(student.first_name, " ",...



17) Set Cookie for CI
===================================================================================================
hooks.php : 
$hook['post_controller_constructor'][] = array(
    'class' => 'Check_user_login',
    'function' => 'initialize',
    'filename' => 'check_user_login.php',
    'filepath' => 'hooks',
);

Check_user_login.php file
<?php

class Check_user_login
{
    public function initialize()
    {
        $CI         = &get_instance();
        $CI->load->database();
        $CI->load->library('session');
        $admin_login = $CI->session->userdata('admin_login');
        $teacher_login = $CI->session->userdata('teacher_login');
        $student_login = $CI->session->userdata('new_student_login');
        $cookie = $CI->input->cookie('already_login');
        $cookie = @unserialize($cookie);
        if (!empty($cookie)) {

            if (is_array($cookie)) {

                if (isset($cookie['username']) && isset($cookie['password'])) {
                    $username = $cookie['username'];
                    $password = $cookie['password'];

                    $credential = array('username' => $username, 'password' => sha1($password));
                    if (empty($admin_login)) {
                        $get_admin = $CI->db->select('*')->where($credential)->limit(1)->get('admin')->row_array();

                        if (!empty($get_admin)) {
                            $CI->session->set_userdata('admin_login', '1');
                            $CI->session->set_userdata('admin_id', $get_admin['admin_id']);
                            $CI->session->set_userdata('login_user_id', $get_admin['admin_id']);
                            $CI->session->set_userdata('name', $get_admin['first_name']);
                            $CI->session->set_userdata('login_type', 'admin');

                            redirect(base_url() . 'admin/tablero', 'refresh');
                        }
                    } else if (empty($teacher_login)) {
                        $get_teacher = $CI->db->select('*')->where($credential)->limit(1)->get('teacher')->row_array();
                        if (!empty($get_teacher)) {
                            $CI->session->set_userdata('teacher_login', '1');
                            $CI->session->set_userdata('teacher_id', $get_teacher['teacher_id']);
                            $CI->session->set_userdata('login_user_id', $get_teacher['teacher_id']);
                            $CI->session->set_userdata('name', $get_teacher['first_name']);
                            $CI->session->set_userdata('login_type', 'teacher');

                            redirect(base_url() . 'teacher/panel/', 'refresh');
                        }
                    } else if (empty($student_login)) {
                        $get_new_student = $CI->db->select('*')->where($credential)->limit(1)->get('student')->row_array();
                        if (!empty($get_new_student)) {
                            $CI->session->set_userdata('new_student_login', '1');
                            $CI->session->set_userdata('student_email', $get_new_student['email']);
                            $CI->session->set_userdata('student_id', $get_new_student['student_id']);
                            $CI->session->set_userdata('name', $get_new_student['first_name']);

                            redirect(base_url() . 'students/dashboard', 'refresh');
                        }
                    }
                }
            }
        }
    }
}


LOGIN :

if ($remember_me) {
    $cookie_value = array(
        'username' => $username,
        'password' => $password
    );
    setcookie('already_login', serialize($cookie_value), $expire, COOKIE_PATH);
}

LOGOUT:

setcookie("already_login", "", time() - 3600, COOKIE_PATH);



18) For sorting
===================================================================================================
<script type="text/javascript" src="<?php echo base_url(); ?>assets/js/jquery-ui.js"></script>

$("#fields_list").sortable();
var $sortable = $("#fields_list");
$sortable.sortable({
    stop: function(event, ui) {
        // parameters will be a string "id[]=1&id[]=3&id[]=10"...etc
        var parameters = $sortable.sortable("serialize");
        $.ajax({
            url: "<?php echo base_url(); ?>admin/custom_sorting",
            type: "post",
            data: parameters,
            success: function(response) {
                var response = $.parseJSON(response);
            }
        });
    }
});



===================================================================================================
session time 
Second = 30000000
days = 347



===================================================================================================
merge internal array:
$result = call_user_func_array("array_merge", $input);
https://stackoverflow.com/questions/13544985/merge-multiple-arrays-from-one-array


===================================================================================================
Select2 in popup

$("#contract_student_id").select2({
    tags: true,
    dropdownParent: $("#frm_new_contract_data")  // formId
});


==================================================================================================
Full ckeditor (4.7.3) with every kind of tools
<script type="text/javascript" src="https://cdn.ckeditor.com/4.7.3/full/ckeditor.js"></script>    



==================================================================================================
MPDF Declaration
$mpdf = new mPDF('+aCJK', 'A4', 0, 'helveticaneue', 15, 15, 15, 15, 0, 0, 'L');  // margin is for page(mode, format, font-size, m-left, m-right, m-top, m-bottom, m-header, m-footer, orientation)


==================================================================================================

Explanation of the cron expression in cloudways: 
0 0: This represents the time of day the cron job will run. The first 0 represents the minute (0-59), and the second 0 represents the hour (0-23). So, in this case, the cron job will run at 00:00 (midnight).

* *: These two placeholders represent the day of the month and month of the year respectively. Since we want the cron job to run every Sunday, we use * to indicate that the cron job should run for any day of the month and any month of the year.

0: This represents the day of the week, where 0 represents Sunday, 1 represents Monday, and so on. So, with 0, the cron job will run on Sundays.




====================================================================================================
Fill in blanks
https://docs.pedagoo.com/knowledgebase/how-to-create-a-fill-in-the-blank-question/



====================================================================================================
Import database using Xampp

D:\xampp\mysql\bin (type cmd And enter)
COmmand  mysql -u root -p <db_name> < C:\Users\Hp\Downloads\fntxerp_dev2.sql


====================================================================================================
Use checkbox as radio button
$('body').on('change', '.trial_lesson_ids', function() {
        if ($(this).is(':checked')) {
            $('.trial_lesson_ids').prop('checked', false);
            $(this).prop('checked', true);
        }
    });


====================================================================================================
Composer install
composer install --ignore-platform-reqs



====================================================================================================
Record screen
Windows key+Alt+R




====================================================================================================
Send Email attachment with merged PDF.

$registration_mail = $this->db->select('*')->from('email_template')->where('template_type', '1')->where('task', 'new_registration')->get()->row_array();
if(!empty($to) && $status == 'Paid') {
    $subject = $registration_mail['subject'];
    $string = ['[STUDENT]'];
    $sting_content = [$get_student_parents['student_name']];
    $message = str_replace($string, $sting_content, $registration_mail['body']);

    $data = $this->student_model->student_details($invoice['student_id']);
    $get_acknowledgement_option = $this->db->get_where('settings', array('type' => 'acknowledgement_option'))->row()->description; // 1 - text, 2 - PDF, 3 - Images
    $data['term_condition'] = $this->db->get_where('settings', array('type' => 'acknowledgement_text'))->row()->description;
    $data['get_acknowledgement_option'] = $get_acknowledgement_option;
    $data['parent_custom_fields'] = $this->db->select('*')->where('is_show_registration_form', 1)->order_by('ordering')->get('parent_custom_fields')->result_array();

    include_once APPPATH . '/libraries/mpdf/mpdf.php';
    $mpdf = new mPDF('+aCJK', 'A4', 0, 'helveticaneue', 0, 0, 6, 10, 0, 'L');
    $mpdf->autoScriptToLang = true;
    $mpdf->autoLangToFont   = true;
    $mpdf->SetFont('helveticaneue');
    $mpdf->SetTitle('Student Document pdf');
    $mpdf->SetDisplayMode(100);
    $mpdf->showImageErrors = true;
    $pdf_view = $this->load->view('backend/embedable_form/student_pdf', $data, true);
    $merged_file = $mpdf->WriteHTML($pdf_view);

    $mpdf2 = new mPDF('+aCJK', 'A4', 0, 'helveticaneue', 0, 0, 6, 10, 0, 'L');
    $mpdf2->autoScriptToLang = true;
    $mpdf2->autoLangToFont   = true;
    $mpdf2->SetFont('helveticaneue');
    $mpdf2->SetTitle('Student Document pdf');
    $mpdf2->SetDisplayMode(100);
    $mpdf2->showImageErrors = true;
    $pdf_view2 = $this->load->view('backend/embedable_form/acknowledgement_pdf', $data, true);
    $mpdf2->WriteHTML($pdf_view2);
     
    
    if ($get_acknowledgement_option == 3) {
        $acknowledgement_images = $this->db->get_where('settings', array('type' => 'acknowledgement_images'))->result_array();
        if (!empty($acknowledgement_images)) {
            foreach ($acknowledgement_images as $image) {
                $html = '<img src="' . base_url() . 'uploads/acknowledgement_pdf/' . $image['description'] . '">';
                $mpdf->AddPage();
                $mpdf->WriteHTML('');
            }
        }
    } else if ($get_acknowledgement_option == 2) {
        $new_file       =   "uploads/registration/" . md5(time()) . ".pdf";
        $mpdf->Output($new_file, "F");
        $merged_file = $mpdf->Output('', "S");

        $ack_file       =   "uploads/registration/" . md5(time()) . "ack.pdf";
        $mpdf2->Output($ack_file, "F");
        $mpdf2->Output('', "S");
        try {

            $acknowledgement_pdf = $this->db->get_where('settings', array('type' => 'acknowledgement_pdf'))->row_array();

            if (counts($acknowledgement_pdf)) {
                $this->load->library("PDFMerger");

                $pdf                =   new PDFMerger;
                $term_file          = APPPATH . "../uploads/acknowledgement_pdf/" . $acknowledgement_pdf['description'];
                // Merge Files 
                $pdf->addPDF(APPPATH . "../" . $new_file, 'all');             // Merge All Pages of this pdf 
                $pdf->addPDF($term_file, 'all');                 // Merge All Pages of this pdf 
                $pdf->addPDF($ack_file, 'all');                 // Merge All Pages of this pdf 
                ob_end_clean();

                $merged_file = $pdf->merge("string"); // generate the file
                unlink($new_file);
                unlink($ack_file);
            }
        } catch (Exception $e) {

            unlink($new_file);
            unlink($ack_file);
        }
    }

    $email_content['content'] = $message;
    $html = $this->load->view('backend/admin/email_template/comom_email', $email_content, true);
    $send_email = send_mail($to, $subject, $html, $merged_file, "Registration PDF");

    if($send_email) {
        $insert_msg_notification = array('type' => 71, 'admin_id' => 1, 'student_id' => $invoice['student_id'], 'invoice_id' => $invoice_id, 'notification_name' => "New student registered using advanced form", 'status' => 2, 'created_date' => date('Y-m-d H:i:s'), 'cdate' => date('Y-m-d'), 'email_text' => $html);
        $this->db->insert('sent_message_notification', $insert_msg_notification);
    }
}




====================================================================================================
Laravel login with linkedin project
https://www.tutsmake.com/laravel-10-login-with-linkedin-example-tutorial/



====================================================================================================
use Illuminate\Support\Facades\Artisan;

// for create migration create
Route::get('/create_migration', function () {
   Artisan::call("make:migration create_email_template_table");
});



//  for create model create
Route::get('/create_model', function () {
 Artisan::call("make:model EmailTemplate");
});

// For run migration
Route::get('/run_migration', function () {
   Artisan::call("migrate");
});

Route::get('/config_cache', function () {
    Artisan::call("config:cache");
});

Route::get('/cache_clear', function () {
    Artisan::call("cache:clear");
});


====================================================================================================
Set ini in controller like this

ini_set( 'memory_limit', '200M' );
ini_set('upload_max_filesize', '200M');  
ini_set('post_max_size', '200M');  
ini_set('max_input_time', 3600);  
ini_set('max_execution_time', 3600);


====================================================================================================
Save after stop typing:

$(document).ready(function() {
    var typingTimer;
    var doneTypingInterval = 100
    $(document).on('keyup', '#teacher_remarks', function(e) {
        clearTimeout(typingTimer);
        typingTimer = setTimeout(doneTyping, doneTypingInterval);
    }
    $(document).on('keydown', '#teacher_remarks', function(e) {
        clearTimeout(typingTimer);
    }
    function doneTyping() {
        $.ajax({
            url: '<?php echo base_url("s_admin/admin_o/Worksheet_controller/update_teacher_remarks"); ?>',
            type: "POST",
            data: {
                "home_work_id": home_work_id,
                "student_id": student_id,
                "teacher_remarks": $('#teacher_remarks').val()
            },
            success: function(response) {
                var response = $.parseJSON(response);
                if (response.status == true) {
                    custom_message('success', response.message);
                } else {
                    custom_message('error', response.message);
                }
            }
        })
    }
})


====================================================================================================
Icons SVG:
https://yesicon.app/search/left%20arrow


====================================================================================================
Connect SFTP using code
composer require phpseclib/phpseclib


require_once('vendor/autoload.php');   // for SFTP connect need to add this
use phpseclib3\Net\SFTP;    // for SFTP connect need to add this  [First need to install package using this command - composer require phpseclib/phpseclib]

$sftpServer = '';
$sftpPort = 22;
$sftpUsername = '';
$sftpPassword = '';
$sftp = new SFTP($sftpServer);

if (!$sftp->login($sftpUsername, $sftpPassword)) {
    throw new \Exception('Could not initialize SFTP subsystem.');
} else {
    echo 'Login successful';
}



==================================================================================================
multidimenstional Array sorting according to value but using key name:

https://stackoverflow.com/questions/1597736/how-to-sort-an-array-of-associative-arrays-by-value-of-a-given-key-in-php
$all_invoice_items = array_column($all_items, 'item_order');
array_multisort($all_invoice_items, SORT_ASC, $all_items);

==================================================================================================
Download SVG:
https://yesicon.app/

=================================================================================================
-> add class in datatable:
rowCallback: function (row, data) {
    $('#subscription-link-section .dataTables_wrapper .row').eq(1).addClass('dt-raw');
}

=================================================================================================
when get formula from excel xlsx file

$cell = $worksheet->getCellByColumnAndRow($header_key, $row);
if ($cell->getDataType() == PHPExcel_Cell_DataType::TYPE_FORMULA) {
    $excel_enroll_date = $cell->getCalculatedValue();
} else {
    $excel_enroll_date = $cell->getValue();
}

=================================================================================================
Show same content as database with all type of spaces
<style>
    .preserve-space {
        white-space: pre;
    }
</style>

<td class="preserve-space"><?php echo htmlspecialchars($class['name']); ?></td>



=================================================================================================
Laravel job find - https://larajobs.com/?ref=laravelnews&utm_source=laravelnews&utm_medium=referral

=================================================================================================

LLMs - large language models
RAG - retrieval augmented generation
 
www.linkedin.com/in/palak-sutariya-782a97214


