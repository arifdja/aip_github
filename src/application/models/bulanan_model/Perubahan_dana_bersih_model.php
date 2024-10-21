<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Perubahan_dana_bersih_model extends CI_Model {
	private $table;

	function __construct(){
		parent::__construct();
		$this->tahun = $this->session->userdata('tahun');
		$this->iduser = $this->session->userdata('iduser');
		$this->table = "bln_perubahan_dana_bersih";
	}

	
	public function get_by_id_ket($id){
		$tahun = $this->session->userdata('tahun');
		$iduser = $this->session->userdata('iduser');
		$response = false;
		$query = $this->db->get_where('ket_lap_bulanan',array('id' => $id,'iduser' => $iduse,'tahun' => $tahun));
		if($query && $query->num_rows()){
			$response = $query->result_array();
		}
		return $response;
	}

	public function delete_ket($p1,$p2){
		$tahun = $this->session->userdata('tahun');
		$iduser = $this->session->userdata('iduser');
		$this->db->delete('ket_lap_bulanan', array('jenis_lap' => $p1, 'id_bulan' => $p2, 'iduser' => $iduser,'tahun' => $tahun));
	}

	public function insert_ket($data){
		$tahun = $this->session->userdata('tahun');
		$this->db->insert('ket_lap_bulanan', $data);
	}


	function get_ket($p1="", $p2="",$p3="",$p4=""){
		$array = array();
		$where  = " WHERE 1=1 ";

		$level = $this->session->userdata('level');
		$tahun = $this->session->userdata('tahun');
		$id_bulan = $this->session->userdata('id_bulan');

		if($level == 'DJA'){
			$iduser = $this->input->post('iduser');
			$where .= "
				AND A.iduser =  '".$iduser."' 
				AND A.tahun =  '".$tahun."'
			";
		}

		if($level == 'TASPEN' || $level == 'ASABRI'){
			$iduser = $this->session->userdata('iduser');
			$where .= "
				AND A.iduser = '".$iduser."'
				AND A.tahun =  '".$tahun."'
			";
		}

		$sql = "
			SELECT A.*
			FROM ket_lap_bulanan A
			$where
			AND A.jenis_lap = '".$p1."'
			AND A.id_bulan = '".$id_bulan."'
		";

		return $this->db->query($sql)->result();
	}


	public function Summary_Perubahan($iduser, $id_bulan, $tahun)
	{

		$this->db->trans_begin();

		if ($id_bulan === '1' && $tahun === '2020') {
			$nilaiTaspen = '151428469320652';
			$nilaiAsabri = '17669911410364';


			$sql = "
					SELECT X.iduser, '".$id_bulan."', '".$tahun."',
				
				        SUM(X.saldo_akhir_bln_lalu) as B_peningkatan_penurunan_bln_lalu, 
				        CASE WHEN X.iduser = '".$iduser."' THEN
				            SUM(X.saldo_akhir_bln_lalu)+'".$nilaiTaspen."' 
				            ELSE
				            SUM(X.saldo_akhir_bln_lalu)+'".$nilaiAsabri."'
				        END
				        AS B_danabersih_awal_periode_lalu, 
				        CASE WHEN X.iduser = '".$iduser."' THEN
				            SUM(X.saldo_akhir_bln_lalu)+'".$nilaiTaspen."' + SUM(X.saldo_akhir_bln_lalu)
				            ELSE
				            SUM(X.saldo_akhir_bln_lalu)+'".$nilaiAsabri."' + SUM(X.saldo_akhir_bln_lalu)
				        END
				        AS B_danabersih_akhir_periode_lalu,
				        
						  SUM(X.saldo_akhir) A_peningkatan_penurunan,
				        CASE WHEN X.iduser = '".$iduser."' THEN
				            SUM(X.saldo_akhir_bln_lalu)+'".$nilaiTaspen."' + SUM(X.saldo_akhir_bln_lalu)
				            ELSE
				            SUM(X.saldo_akhir_bln_lalu)+'".$nilaiAsabri."' + SUM(X.saldo_akhir_bln_lalu)
				        END
				        AS A_danabersih_awal_periode,
				        
				        CASE WHEN X.iduser = '".$iduser."' THEN
				            SUM(X.saldo_akhir_bln_lalu)+'".$nilaiTaspen."' + SUM(X.saldo_akhir_bln_lalu)+SUM(X.saldo_akhir)
				            ELSE
				            SUM(X.saldo_akhir_bln_lalu)+'".$nilaiAsabri."' + SUM(X.saldo_akhir_bln_lalu) + SUM(X.saldo_akhir)
				        END
				        AS A_danabersih_akhir_periode,
				        0,
				        1
				        FROM (
				        SELECT
				            A.*, B.id_investasi,
				            B.jenis_investasi,
				            B.iduser,
				            C.id_bulan,
				            B.`group`,
				            B.parent_id,
				            B.type_sub_jenis_investasi AS type,
				            CASE WHEN A.uraian = 'PENGURANGAN' THEN
				            COALESCE (
				                SUM(
				                    CASE
				                    WHEN B.`group` = 'HASIL INVESTASI' THEN
				                        (C.mutasi * -1)
				                    ELSE
				                        (C.saldo_akhir *-1)
				                    END
				                ),
				                0
				            ) 
				            ELSE
				                COALESCE (
				                    SUM(
				                        CASE
				                        WHEN B.`group` = 'HASIL INVESTASI' THEN
				                            C.mutasi
				                        ELSE
				                            C.saldo_akhir
				                        END
				                    ),
				                    0
				                ) 
				            END
				            AS saldo_akhir,
				            COALESCE (
				                (SELECT saldo_akhir_invest FROM bln_aset_investasi_header WHERE C.id_bulan = id_bulan-1 AND C.iduser = '".$iduser."' AND CASE WHEN '".$tahun."' = '2020' THEN tahun = '2019' ELSE tahun = '".$tahun."' END AND id_investasi = B.id_investasi),
				                0
				            )
				            AS saldo_akhir_bln_lalu
				        FROM
				            mst_perubahan_danabersih A
				        LEFT JOIN mst_investasi B ON A.id_perubahan_dana_bersih = B.id_perubahan_dana_bersih
				        LEFT JOIN (
				            SELECT
				                id_investasi,
				                saldo_akhir_invest AS saldo_akhir,
				                mutasi_invest AS mutasi,
				                id_bulan,
				                tahun,
				                iduser
				            FROM
				                bln_aset_investasi_header
				            WHERE id_bulan = '".$id_bulan."'
				            AND iduser = '".$iduser."'
				            AND tahun = '".$tahun."'
				        ) C ON B.id_investasi = C.id_investasi
				        WHERE
				            B.iduser = '".$iduser."'
				        GROUP BY
				            A.uraian
				        ) AS X
					GROUP BY X.iduser, X.id_bulan;
				";

			$data = $this->db->query($sql)->row_array();

			$query = $this->db->get_where('tbl_perubahan_dana_bersih',array('iduser' => $iduser,'id_bulan' => $id_bulan,'tahun' => $tahun));
			if($query->num_rows() > 0){
				$update = array(
					'peningkatan_penurunan_bln_lalu' => escape($data['B_peningkatan_penurunan_bln_lalu']),
					'danabersih_awal_periode_lalu' => escape($data['B_danabersih_awal_periode_lalu']),
					'danabersih_akhir_periode_lalu' => escape($data['B_danabersih_akhir_periode_lalu']),
					'peningkatan_penurunan' => escape($data['A_peningkatan_penurunan']),
					'danabersih_awal_periode' => escape($data['A_danabersih_awal_periode']),
					'danabersih_akhir_periode' => escape($data['A_danabersih_akhir_periode']),
				);
				$this->db->update('tbl_perubahan_dana_bersih', $update, array('iduser' => $iduser,'id_bulan' => $id_bulan,'tahun' => $tahun) );
			}else{

				

				$insert = array(
					'iduser' => $this->iduser,
					'id_bulan' => $id_bulan,
					'tahun' => $this->tahun,
					'peningkatan_penurunan_bln_lalu' => escape($data['B_peningkatan_penurunan_bln_lalu']),
					'danabersih_awal_periode_lalu' => escape($data['B_danabersih_awal_periode_lalu']),
					'danabersih_akhir_periode_lalu' => escape($data['B_danabersih_akhir_periode_lalu']),
					'peningkatan_penurunan' => escape($data['A_peningkatan_penurunan']),
					'danabersih_awal_periode' => escape($data['A_danabersih_awal_periode']),
					'danabersih_akhir_periode' => escape($data['A_danabersih_akhir_periode']),
					'is_saldo_awal' => 0,
					'id_summary' => 1,
				);

				$this->db->insert('tbl_perubahan_dana_bersih', $insert);

			}


		}else{

			if($id_bulan == 1 ){
				$bln_lalu = 12;
				$tahun_lalu = $tahun - 1;
			}else{
				$bln_lalu = $id_bulan -1;
				$tahun_lalu = $tahun;
			}

			$sql2 = "
		    	SELECT SUM(X.saldo_akhir) A_peningkatan_penurunan
				        FROM (
				        SELECT
				            A.*, B.id_investasi,
				            B.jenis_investasi,
				            B.iduser,
				            C.id_bulan,
				            C.tahun,
				            B.`group`,
				            B.parent_id,
				            B.type_sub_jenis_investasi AS type,
				            CASE WHEN A.uraian = 'PENGURANGAN' THEN
				            COALESCE (
				                SUM(
				                    CASE
				                    WHEN B.`group` = 'HASIL INVESTASI' THEN
				                        (C.mutasi * -1)
				                    ELSE
				                        (C.saldo_akhir *-1)
				                    END
				                ),
				                0
				            ) 
				            ELSE
				                COALESCE (
				                    SUM(
				                        CASE
				                        WHEN B.`group` = 'HASIL INVESTASI' THEN
				                            C.mutasi
				                        ELSE
				                            C.saldo_akhir
				                        END
				                    ),
				                    0
				                ) 
				            END
				            AS saldo_akhir,
				            CASE WHEN A.uraian = 'PENGURANGAN' THEN
				            	COALESCE (
				                SUM(
				                    CASE
				                    WHEN B.`group` = 'HASIL INVESTASI' THEN
				                        (D.mutasi * -1)
				                    ELSE
				                        (D.saldo_akhir *-1)
				                    END
				                ),
				                0
				            ) 
				            ELSE
				                COALESCE (
				                    SUM(
				                        CASE
				                        WHEN B.`group` = 'HASIL INVESTASI' THEN
				                            D.mutasi
				                        ELSE
				                            D.saldo_akhir
				                        END
				                    ),
				                    0
				                ) 
				            END
				            AS saldo_akhir_bln_lalu
				        FROM
				            mst_perubahan_danabersih A
				        LEFT JOIN mst_investasi B ON A.id_perubahan_dana_bersih = B.id_perubahan_dana_bersih
				        LEFT JOIN (
				            SELECT
				                id_investasi,
				                saldo_akhir_invest AS saldo_akhir,
				                mutasi_invest AS mutasi,
				                id_bulan,
				                tahun,
				                iduser
				            FROM
				                bln_aset_investasi_header
				            WHERE id_bulan = '".$id_bulan."'
				            AND iduser = '".$iduser."'
				            AND tahun = '".$tahun."'
				        ) C ON B.id_investasi = C.id_investasi
				        LEFT JOIN (
				            SELECT
				                id_investasi,
				                saldo_akhir_invest AS saldo_akhir,
				                mutasi_invest AS mutasi,
				                id_bulan,
				                tahun,
				                iduser
				            FROM
				                bln_aset_investasi_header
				            WHERE id_bulan = '".$bln_lalu."'
				            AND iduser = '".$iduser."'
				            AND tahun = '".$tahun_lalu."'
				        ) D ON B.id_investasi = D.id_investasi
				        WHERE B.iduser = '".$iduser."'
				        GROUP BY A.uraian ) AS X
				GROUP BY X.iduser, X.id_bulan, X.tahun
				
		      	
			";

			// echo $sql2;exit;
			$data2 = $this->db->query($sql2)->row_array();



			$sql3 = "
				SELECT '".$iduser."',
						'".$bln_lalu."', 
						'".$tahun_lalu."',
						`peningkatan_penurunan` AS peningkatan_penurunan_bln_lalu, 
						`danabersih_awal_periode` AS danabersih_awal_periode_lalu, 
						`danabersih_akhir_periode` AS danabersih_akhir_periode_lalu, 
						'".$data2['A_peningkatan_penurunan']."' AS peningkatan_penurunan, 
						`danabersih_akhir_periode` AS danabersih_awal_periode, 
						'".$data2['A_peningkatan_penurunan']."'+`danabersih_akhir_periode` AS danabersih_akhir_periode, 
						koreksi_audit,
						`is_saldo_awal`,`id_summary` 
				FROM `tbl_perubahan_dana_bersih` 
				WHERE `iduser` = '".$iduser."' AND `id_bulan` = '".$bln_lalu."' AND `tahun` = '".$tahun_lalu."'
			";

			$data3 = $this->db->query($sql3)->row_array();
			// var_dump($sql2);exit;
			if(isset($data3)){
				$query2 = $this->db->get_where('tbl_perubahan_dana_bersih',array('iduser' => $iduser,'id_bulan' => $id_bulan,'tahun' => $tahun));
				if($query2->num_rows() > 0){
					$koreksi = $query2->row_array();
					$update2 = array(
						'peningkatan_penurunan_bln_lalu' => escape($data3['peningkatan_penurunan_bln_lalu']),
						'danabersih_awal_periode_lalu' => escape($data3['danabersih_awal_periode_lalu']),
						'danabersih_akhir_periode_lalu' => escape($data3['danabersih_akhir_periode_lalu']),
						'peningkatan_penurunan' => escape($data3['peningkatan_penurunan']),
						'danabersih_awal_periode' => escape($data3['danabersih_awal_periode']),
						'danabersih_akhir_periode' => escape($data3['danabersih_akhir_periode'] + $koreksi['koreksi_audit']),
					);
					$this->db->update('tbl_perubahan_dana_bersih', $update2, array('iduser' => $iduser,'id_bulan' => $id_bulan,'tahun' => $tahun) );
				}else{

					$insert2 = array(
						'iduser' => $this->iduser,
						'id_bulan' => $id_bulan,
						'tahun' => $this->tahun,
						'peningkatan_penurunan_bln_lalu' => escape($data3['peningkatan_penurunan_bln_lalu']),
						'danabersih_awal_periode_lalu' => escape($data3['danabersih_awal_periode_lalu']),
						'danabersih_akhir_periode_lalu' => escape($data3['danabersih_akhir_periode_lalu']),
						'peningkatan_penurunan' => escape($data3['peningkatan_penurunan']),
						'danabersih_awal_periode' => escape($data3['danabersih_awal_periode']),
						'danabersih_akhir_periode' => escape($data3['danabersih_akhir_periode']),
						'is_saldo_awal' => 0,
						'id_summary' => 1,
					);

					$this->db->insert('tbl_perubahan_dana_bersih', $insert2);

				}
			}

		}
		

		

		if($this->db->trans_status() == false){
			$this->db->trans_rollback();
			return 'gagal';
		}else{
			return $this->db->trans_commit();
		}

	}

	function getdata($type="", $balikan="", $p1="", $p2="",$p3="",$p4=""){
		$array = array();
		$where  = " WHERE 1=1 ";
		$where2  = " WHERE 1=1 ";
		$where3 = "";
		
		$dbdriver = $this->db->dbdriver;
		if($dbdriver == "postgre"){
			$select = " ROW_NUMBER() OVER (ORDER BY A.id DESC) as rowID, ";
		}else{
			$select = "";
		}
		
		if($this->input->post('key')){
			$key = $this->input->post('key');
			$kat = $this->input->post('kat');
			$where .= " AND LOWER(".$kat.") like '%".strtolower(trim($key))."%' ";
		}
		

		$level = $this->session->userdata('level');
		$tahun = $this->session->userdata('tahun');
		$id_bulan = $this->session->userdata('id_bulan');

		if($level == 'DJA'){
			$iduser = $this->input->post('iduser');
			$where .= "
				AND B.iduser =  '".$iduser."'
			";
			$where2 .= "
				AND A.iduser =  '".$iduser."'
			";
		}

		if($level == 'TASPEN' || $level == 'ASABRI'){
			$iduser = $this->session->userdata('iduser');
			$where .= "
				AND B.iduser = '".$iduser."'
			";
			$where2 .= "
				AND A.iduser = '".$iduser."'
			";
		}

		switch($type){
			case 'tbl_perubahan_dana_bersih':
				$sql = "
					SELECT * 
					FROM `tbl_perubahan_dana_bersih` 
					WHERE `iduser` = '".$p1."'
					AND `id_bulan` = '".$p2."' 
					AND `tahun` = '".$p3."'
				";
			break;

			case 'tbl_perubahan_dana_bersih_lalu':
				if($p2 == 1){
					$bln_lalu = 12;
					$tahun_lalu = $p3 - 1;
				}else{
					$bln_lalu = $p2 -1;
					$tahun_lalu = $p3;
				}
				$sql = "
					SELECT * 
					FROM `tbl_perubahan_dana_bersih` 
					WHERE `iduser` = '".$p1."'
					AND `id_bulan` = '".$bln_lalu."' 
					AND `tahun` = '".$tahun_lalu."'
				";
			break;

			case 'aset_investasi_front':
				// kondisi setelah bulan januari
				// kondisi bulan lalu
				if($id_bulan == 1){
					$bln_lalu = 12;
					$tahun_lalu = $tahun - 1;
				}else{
					$bln_lalu = $id_bulan -1;
					$tahun_lalu = $tahun;
				}

				$sql="
					SELECT A.id_investasi, A.jenis_investasi, A.jns_form, A.iduser,A.type_sub_jenis_investasi as type, 
					B.rka, B.saldo_akhir, B.saldo_awal, C.saldo_akhir_lalu, B.id
					FROM mst_investasi A
					LEFT JOIN(
						SELECT id,id_investasi, rka, saldo_akhir_invest as saldo_akhir, saldo_awal_invest as saldo_awal, id_bulan, iduser, tahun
						FROM bln_aset_investasi_header
						WHERE id_bulan = '".$id_bulan."'
						AND iduser = '".$iduser."'
						AND tahun = '".$tahun."'
					) B ON A.id_investasi = B.id_investasi
					LEFT JOIN(
						SELECT id,id_investasi, rka, saldo_akhir_invest as saldo_akhir_lalu, id_bulan, iduser, tahun
						FROM bln_aset_investasi_header
						WHERE id_bulan = '".$bln_lalu."'
						AND iduser = '".$iduser."'
						AND tahun = '".$tahun_lalu."'
					) C ON A.id_investasi = C.id_investasi
					WHERE `group`='".$p1."' 
					AND A.iduser = '".$iduser."'
					AND (A.type_sub_jenis_investasi = 'P' OR A.type_sub_jenis_investasi = 'PC')
					GROUP BY A.id_investasi
					ORDER BY A.no_urut ASC

				";
				// echo $sql;exit;
			break;
			case 'aset_investasi_front_lv2':
				$sql="
					SELECT A.parent_id as id_investasi, A.jns_form, A.iduser, B.id_bulan,
					sum(B.saldo_awal) as saldo_awal, sum(B.mutasi) as mutasi, sum(B.rka) as rka, sum(B.realisasi_rka) as realisasi_rka, 
					sum(B.saldo_akhir) as saldo_akhir, A.id_investasi as parent_id, C.parent_investasi as jenis_investasi, C.type, B.id
					FROM mst_investasi A
					LEFT JOIN(
						SELECT id,id_investasi, saldo_awal_invest as saldo_awal, mutasi_invest as mutasi, rka, realisasi_rka, tahun,
						saldo_akhir_invest as saldo_akhir, id_bulan, iduser
						FROM bln_aset_investasi_header
						WHERE id_bulan = '".$id_bulan."'
						AND iduser = '".$iduser."'
						AND tahun = '".$tahun."'
					) B ON A.id_investasi = B.id_investasi
					LEFT JOIN(
						SELECT id_investasi, jenis_investasi as parent_investasi, tahun,
						type_sub_jenis_investasi as type
						FROM mst_investasi
					)C on A.parent_id = C.id_investasi
					WHERE A.`group` ='".$p2."'
					AND A.iduser = '".$iduser."'
					AND tahun = '".$tahun."'
					AND (A.type_sub_jenis_investasi = 'C')
					AND A.parent_id ='".$p1."'
					ORDER BY A.no_urut ASC

				";
			break;

			case 'aset_investasi_front_lv3':
				// kondisi setelah bulan januari
				// kondisi bulan lalu
				if($id_bulan == 1){
					$bln_lalu = 12;
					$tahun_lalu = $tahun - 1;
				}else{
					$bln_lalu = $id_bulan -1;
					$tahun_lalu = $tahun;
				}

				$sql="
					SELECT A.id_investasi, A.jenis_investasi, A.jns_form, A.iduser,A.type_sub_jenis_investasi as type,B.id,
					B.rka as rka, 
					B.saldo_akhir as saldo_akhir, B.saldo_awal,
					C.saldo_akhir as saldo_akhir_lalu
					FROM mst_investasi A
					LEFT JOIN(
						SELECT id,id_investasi, saldo_awal_invest as saldo_awal, mutasi_invest as mutasi, rka, realisasi_rka,
						saldo_akhir_invest as saldo_akhir, id_bulan, iduser, tahun
						FROM bln_aset_investasi_header
						WHERE id_bulan = '".$id_bulan."'
						AND iduser = '".$iduser."'
						AND tahun = '".$tahun."'
					) B ON A.id_investasi = B.id_investasi
					LEFT JOIN(
						SELECT id,id_investasi, saldo_awal_invest as saldo_awal, mutasi_invest as mutasi, rka, realisasi_rka,
						saldo_akhir_invest as saldo_akhir, id_bulan, iduser, tahun
						FROM bln_aset_investasi_header
						WHERE id_bulan = '".$id_bulan."'
						AND iduser = '".$iduser."'
						AND tahun = '".$tahun_lalu."'
					) C ON A.id_investasi = C.id_investasi
					
					WHERE A.`group` ='".$p2."'
					AND A.iduser = '".$iduser."'
					AND A.parent_id ='".$p1."'
					GROUP BY A.id_investasi
					ORDER BY A.no_urut ASC

				";
				// echo $sql;exit;
			break;

			// case 'aset_investasi_front_sum':
			// 	// kondisi setelah bulan januari
			// 	// kondisi bulan lalu
			// 	if($id_bulan == 1){
			// 		$bln_lalu = 12;
			// 		$tahun_lalu = $tahun - 1;
			// 	}else{
			// 		$bln_lalu = $id_bulan -1;
			// 		$tahun_lalu = $tahun;
			// 	}


			// 	$sql="
			// 		SELECT A.id_investasi, A.jenis_investasi, A.iduser,B.id,
			// 		COALESCE(SUM(B.rka), 0) as rka,
			// 		COALESCE(SUM(B.saldo_akhir), 0) as saldo_akhir,
			// 		COALESCE(SUM(B.saldo_awal), 0) as saldo_awal,
			// 		COALESCE(SUM(C.saldo_akhir_lalu), 0) as saldo_akhir_lalu
			// 		FROM mst_investasi A
			// 		LEFT JOIN(
			// 			SELECT id,id_investasi, rka, saldo_akhir_invest as saldo_akhir, saldo_awal_invest as saldo_awal, id_bulan, iduser, tahun
			// 			FROM bln_aset_investasi_header
			// 			WHERE id_bulan = '".$id_bulan."'
			// 			AND iduser = '".$iduser."'
			// 			AND tahun = '".$tahun."'
			// 		) B ON A.id_investasi = B.id_investasi
			// 		LEFT JOIN(
			// 			SELECT id,id_investasi, rka, saldo_akhir_invest as saldo_akhir_lalu, id_bulan, iduser, tahun
			// 			FROM bln_aset_investasi_header
			// 			WHERE id_bulan = '".$bln_lalu."'
			// 			AND iduser = '".$iduser."'
			// 			AND tahun = '".$tahun_lalu."'
			// 		) C ON A.id_investasi = C.id_investasi
		
			// 		WHERE A.`group` ='".$p1."'
			// 		AND A.iduser = '".$iduser."'
			// 		ORDER BY A.no_urut ASC
			// 	";

			// break;

			case 'aset_investasi_front_sum':
				// kondisi setelah bulan januari
				// kondisi bulan lalu
				if($id_bulan == 1){
					$bln_lalu = 12;
					$tahun_lalu = $tahun - 1;
				}else{
					$bln_lalu = $id_bulan -1;
					$tahun_lalu = $tahun;
				}


				$sql = "	
					SELECT
						A.iduser,
						B.id_bulan,
						sum(B.saldo_awal) AS saldo_awal,
					CASE WHEN A.`group` = 'BEBAN INVESTASI'  AND  A.type_sub_jenis_investasi = 'C'
						THEN max(B.rka)
						ELSE sum(B.rka)
					END AS rka,
					sum(B.saldo_akhir) AS saldo_akhir,
					COALESCE(SUM(C.saldo_akhir_lalu), 0) as saldo_akhir_lalu
					FROM mst_investasi A
					LEFT JOIN (
						SELECT
							x.id_investasi,
							y.jenis_investasi, 
							sum(x.saldo_awal_invest) AS saldo_awal,
							sum(x.mutasi_invest) AS mutasi,
							CASE WHEN y.`group` = 'BEBAN INVESTASI'  AND  y.type_sub_jenis_investasi = 'C'
								THEN max(x.rka)
								ELSE sum(x.rka)
							END AS rka,
							(sum(x.saldo_akhir_invest)/max(x.rka)*100) AS realisasi_rka,
							x.tahun,
							sum(x.saldo_akhir_invest) AS saldo_akhir,
							x.id_bulan,
							x.iduser
						FROM bln_aset_investasi_header x
						LEFT JOIN mst_investasi y ON x.id_investasi = y.id_investasi
						WHERE x.id_bulan = '".$id_bulan."'
						AND x.iduser = '".$iduser."'
						AND x.tahun = '".$tahun."'
						AND y.`group` = 'BEBAN INVESTASI' 
						GROUP BY y.type_sub_jenis_investasi, y.parent_id
					) B ON A.id_investasi = B.id_investasi

					LEFT JOIN (
						SELECT
							x.id_investasi,
							y.jenis_investasi, 
							sum(x.saldo_awal_invest) AS saldo_awal,
							sum(x.mutasi_invest) AS mutasi,
							CASE WHEN y.`group` = 'BEBAN INVESTASI'  AND  y.type_sub_jenis_investasi = 'C'
								THEN max(x.rka)
								ELSE sum(x.rka)
							END AS rka,
							(sum(x.saldo_akhir_invest)/max(x.rka)*100) AS realisasi_rka,
							x.tahun,
							sum(x.saldo_akhir_invest) AS saldo_akhir_lalu,
							x.id_bulan,
							x.iduser
						FROM bln_aset_investasi_header x
						LEFT JOIN mst_investasi y ON x.id_investasi = y.id_investasi
						WHERE x.id_bulan = '".$bln_lalu."'
						AND x.iduser = '".$iduser."'
						AND x.tahun = '".$tahun_lalu."'
						AND y.`group` = 'BEBAN INVESTASI'
						GROUP BY y.type_sub_jenis_investasi, y.parent_id
					) C ON A.id_investasi = C.id_investasi
					WHERE A.`group` ='".$p1."'
					AND A.iduser = '".$iduser."'
					ORDER BY A.no_urut ASC


				";



		}

		if($balikan == 'json'){
			return $this->lib->json_grid($sql,$type);
		}elseif($balikan == 'row_array'){
			return $this->db->query($sql)->row_array();
		}elseif($balikan == 'result'){
			return $this->db->query($sql)->result();
		}elseif($balikan == 'result_array'){
			return $this->db->query($sql)->result_array();
		}elseif($balikan == 'json_variable'){
			return json_encode($array);
		}elseif($balikan == 'json_encode'){
			$data = $this->db->query($sql)->result_array(); 
			return json_encode($data);
		}elseif($balikan == 'variable'){
			return $array;
		}elseif($balikan == 'json_datatable'){
			return $this->lib->json_datatable($sql, $type);
		}
	}

}