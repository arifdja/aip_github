<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Peserta_aktif_model extends CI_Model {
	private $table;
	function __construct(){
      parent::__construct();
      $this->tahun = $this->session->userdata('tahun');
      $this->iduser = $this->session->userdata('iduser');
	  $this->table = 'tbl_lkao_peserta_aktif_bulanan';
	}
	
	function getdata($bulan=null){
        $tahun = $this->session->userdata('tahun');
		$iduser = $this->session->userdata('iduser');

        if($bulan!=null){
            $sql ="
            SELECT * FROM tbl_lkao_peserta_aktif_bulanan a 
                    LEFT JOIN  mst_kelompok_peserta_aktif b USING (id_kelompok,iduser)
                    WHERE a.iduser = ? AND a.tahun = ? and a.bulan = ?
                ";
            return $this->db->query($sql,[$iduser,$tahun,$bulan])->result_array();
        } else {
            $sql ="
            SELECT * FROM tbl_lkao_peserta_aktif_bulanan a 
                    LEFT JOIN  mst_kelompok_peserta_aktif b USING (id_kelompok,iduser)
                    WHERE a.iduser = ? AND a.tahun = ?
                ";  
            return $this->db->query($sql,[$iduser,$tahun])->result_array();
        }

            
	}
	
}