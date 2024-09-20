<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Pendahuluan extends CI_Controller {
	function __construct() {
		parent::__construct();
		date_default_timezone_set('Asia/Jakarta');
		$this->load->model('tahunan_model/pendahuluan_model');
		
		$this->load->library('form_validation');
		$this->load->library('user_agent');
		// $this->load->library('pdf');
		$this->load->library('upload');
		$this->load->helper('download');

		$bulan=$this->session->userdata('id_bulan');
		$tahun=$this->session->userdata('tahun');
		//cek login
		if (! $this->session->userdata('isLoggedIn') ) redirect("login/show_login");
		$userData=$this->session->userdata();
		//cek akses route
		// if($userData['idusergroup'] !== '001') show_404();
		
		$this->page_limit = 10;
		
	}
	
	
	public function index(){
		$data['opt_smt'] = semester();
		$data['opt_user'] = dtuser();
		$data['data_pendahuluan'] = $this->pendahuluan_model->get_ket();
		$data['bread'] = array('header'=>'Pendahuluan', 'subheader'=>'Pendahuluan');
		$data['view']  = "tahunan/pendahuluan/input_pendahuluan";
		$this->load->view('main/utama', $data);
	}

	function get_index($mod){
		switch($mod){
			case 'index-pendahuluan-tahunan':
				$data['iduser'] = $this->input->post('iduser');

				$data['opt_smt'] = semester();
				$data['opt_user'] = dtuser();
				$data['data_pendahuluan'] = $this->pendahuluan_model->get_ket();
				$data['bread'] = array('header'=>'Pendahuluan', 'subheader'=>'Pendahuluan');
				$data['view']  = "tahunan/pendahuluan/input_pendahuluan";

				// print_r($data);exit();
			break;
			case 'index-pernyataan-tahunan':
				$data['iduser'] = $this->input->post('iduser');

				$data['opt_smt'] = semester();
				$data['opt_user'] = dtuser();
				$data['data_pendahuluan'] = $this->pendahuluan_model->get_ket();
				$data['bread'] = array('header'=>'Pendahuluan', 'subheader'=>'Pendahuluan');
				$data['view']  = "tahunan/pendahuluan/input_pernyataan";
				// echo "<pre>";
				// print_r($data);exit();
			break;
		}

		$data['mod'] = $mod;
		$data['acak'] = md5(date('H:i:s'));
		$dt = $this->load->view($data['view'], $data, TRUE);
		echo $dt;
	}

	function cetak($mod=""){
        
        switch($mod){
            case "index-pendahuluan-thn-cetak":
               	$data['iduser'] = $this->input->post('iduser');
				$data['data_pendahuluan'] = $this->pendahuluan_model->get_ket();

                $template  = $this->load->view('tahunan/pendahuluan/index_pdf_export', $data,true);  
                $this->hasil_output('pdf',$mod,'', $data, '', "A4", $template, "ya", "no");
            break;
            case "index-pernyataan-thn-cetak":
                $data['iduser'] = $this->input->post('iduser');
				$data['data_pendahuluan'] = $this->pendahuluan_model->get_ket();
                
                $template  = $this->load->view('tahunan/pendahuluan/cetak_bukti_pdf', $data,true);
                $this->hasil_output('pdf',$mod,'', $data, '', "A4", $template, "ya", "no");
            break;
        }
        
    }
    
    function hasil_output($p1,$mod,$data_detail,$data,$filename="",$ukuran="A4",$template="",$footer="", $header=""){
        switch($p1){
            case "pdf":
                // print_r($data);exit;
                // For PHP 7.4
                $pdf = new \Mpdf\Mpdf();
                $pdf->WriteHTML($template,2);
                $pdf->Output();


                // $this->load->library('m_pdf');
                // $pdf=$this->m_pdf->load();
                // $pdf->SetDisplayMode('fullpage');
                // $pdf->setFooter('{PAGENO}');
                // $pdf->simpleTables = true;
                // $pdf->packTableData = true;
                // $keep_table_proportions = TRUE;
                // $shrink_tables_to_fit = 1;
                // $pdf->use_kwt=true; //pagebreak
                // $pdf->SetTitle($title);
                // $pdf->WriteHTML($template,2);

                // $pdf->Output();
            break;
        }
    }


	

	public function pernyataan(){
		$data['opt_user'] = dtuser();
        $data['iduser'] =  $this->session->userdata("iduser");
		$data['data_pendahuluan'] = $this->pendahuluan_model->get_ket();
		$data['bread'] = array('header'=>'Pendahuluan', 'subheader'=>'Pendahuluan');
		$data['view']  = "tahunan/pendahuluan/input_pernyataan";
		$this->load->view('main/utama', $data);
	}

	

    public function create(){
    	$this->load->view('semesteran/pendahuluan/input_pendahuluan');
    }

    public function edit($id = ''){
    	$check_id = $this->pendahuluan_model->get_by_id($id);
    	if($check_id){
    		$data['data_pendahuluan'] = $check_id[0];
    		$this->load->view('semesteran/pendahuluan/input_pendahuluan', $data);
    	}else{
    		redirect(site_url('semesteran/pendahuluan'));
    	}
    }


    

	public function save_pendahuluan(){
		$tahun = $this->session->userdata('tahun');
        $level = $this->session->userdata('level');

        $upload_path   = './files/file_tahunan/pendahuluan/'; //path folder
        $data['filedata_lama'] = escape($this->input->post('filedata_lama'));
        $data['nmdoc'] = escape($this->input->post('nmdok'));

        if(!empty($_FILES['filedata']['name'])){                  
        	if(isset($data["filedata_lama"])){
        		if($data["filedata_lama"] != ""){
        			unlink($upload_path.$data["filedata_lama"]);
        		}
        	}

        	$file_data = $data['nmdoc'].'_'.$tahun.'_'.$level;
        	$filename_data =  $this->lib->uploadnong($upload_path, 'filedata', $file_data);
        }else{
        	$filename_data = (isset($data["filedata_lama"]) ? $data["filedata_lama"] : null );
        }

        $data["file"] = $filename_data;
        unset($data["filedata_lama"]);
        unset($data["upload_path_lama"]);
        unset($data["nmdoc"]);

        $data['id'] 			    = $this->input->post('id');
        $data['iduser']             = $this->session->userdata('iduser');
        $data['tahun'] 				= $this->session->userdata('tahun');
        $data['tujuan_laporan'] 	= $this->input->post('tujuan_laporan');
        $data['latar_belakang'] 	= $this->input->post('latar_belakang');
        $data['periode'] 			= $this->input->post('periode');
        $data['kejadian_penting'] 	= $this->input->post('kejadian_penting');
        $data['keterangan'] 		= $this->input->post('keterangan');
        $data['direksi'] 			= $this->input->post('direksi');
        $data['komisaris'] 			= $this->input->post('komisaris');
        $data['alamat'] 			= $this->input->post('alamat');
        $data['insert_at']          = date("Y-m-d H:i:s");

        $this->pendahuluan_model->delete_ket();
        $this->pendahuluan_model->insert_ket($data);

        $this->session->set_flashdata('form_true',
        	'<div class="alert alert-success">
        	<h4>Berhasil.</h4>
        	<p>Data keterangan berhasil Disimpan.</p>
        	</div>');
        redirect ($this->agent->referrer());
    }


    public function update_status(){

        $iduser                         = $this->session->userdata('iduser');
    	$tahun 				 		    = $this->session->userdata('tahun');
    	$data['status'] 	 			= escape($this->input->post('status'));
    	$data['nama_penandatangan'] 	= escape($this->input->post('nama_penandatangan'));
    	$data['jabatan'] 				= escape($this->input->post('jabatan'));
    	$data['status_tgl'] 			= date("Y-m-d H:i:s");
		  // var_dump($data);exit;
    	$id_ref                         = $iduser.'_'.date("Y-m-d H:i:s");
        $data['id_ref']                 = str_replace('=','',base64_encode($id_ref));
    

        $filter['iduser'] =  $iduser;
        $filter['tahun'] = $tahun;
        $filter['tahun'] = $tahun;
        $data_pendahuluan = $this->pendahuluan_model->get_filter($filter);
        $jml =  count($data_pendahuluan);
        // print_r($jml);exit();

        if ( $jml > 0 || $jml == 1) {
            $this->pendahuluan_model->update($tahun,$iduser,$data);

            $this->session->set_flashdata('form_true',
                '<div class="alert alert-success">
                <h4>Berhasil.</h4>
                <p>Data berhasil Disimpan.</p>
                </div>');

            redirect ($this->agent->referrer());

        }else{
            $this->session->set_flashdata('form_true',
                '<div class="alert alert-danger">
                <h4>Gagal.</h4>
                <p>Anda Belum Input Pendahuluan.</p>
                </div>');

            redirect ($this->agent->referrer());
        }
    }


    public function get_file(){
    	$id = $this->uri->segment(4);
    	$get_db = $this->pendahuluan_model->get_by_id($id);
    	$file = $get_db[0]['file'];
    	$path = './files/file_tahunan/pendahuluan/'.$file;
    	$data = file_get_contents($path);
    	$name = $file;
    	force_download($name,$data);
    }

    public function delete($id){
    	$check_id = $this->pendahuluan_model->get_by_id($id);
    	if($check_id){
    		$this->pendahuluan_model->delete($id);
    		$this->session->set_flashdata('form_true',
    			'<div class="alert alert-danger">
    			<h4>Berhasil.</h4>
    			<p>Data berhasil Dihapus.</p>
    			</div>');
    	}
    	redirect ($this->agent->referrer());
    }
    


}
