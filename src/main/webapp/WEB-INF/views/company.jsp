
<!-- MyCompany Section -->
<div id="myCompanyDiv" class="page">
<div class="container">
    <!-- MyCompany Form -->
    <div class="row">
		<div align="center">
		   <form id="myCompanyForm">
		   		<table class="tablaQuiniGold">
		   			<tr align="center">
						<td colspan="2">MIS GRUPOS</td>
					</tr>
			   		<tr>
<!-- 			   		<td>Grupo:</td> -->
<!-- 			   			<td> -->
<!-- 			   			<select name="companyID" id="companyToChoose"> -->
<!-- 						</select> -->

 						<td align="center" colspan="2">
<!--  						<div id="MisGrBtns" align="center" style="height:220px;overflow-y:auto;">
 --> 						<div id="MisGrBtns" align="center">
						</div>
			   			</td>
			        </tr>
<!-- 			   		<tr align="center"> -->
<!-- 			   			<td align="center" colspan="2"><button id="myCompanyFormSubmit_btn" class="btn btn-danger" name="submitBtn" value="submitBtn">Seleccionar</button></td> -->
<!-- 			        </tr> -->
		        </table>
	       </form>
		        <br>
		   <form id="joinCompanyForm">
		   		<table class="tablaQuiniGold">
		   			<tr align="center">
						<td colspan="2">OTROS GRUPOS</td>
					</tr>
					<tr align="center">
<!-- 		   			
						<td colspan="2">
							<select id="selectActionRolCompany">
								<option value="1">Unirse a</option>
								<option value="2">Borrarse de</option>
							</select>
						</td>
					</tr>
			   		<tr>
			   			<td>Grupo:</td>
			   			<td>
			   			<select name="companyID" id="companyToChoosePublic">
						</select>
 -->
 						<td colspan="2">						
						<div id="PublicGrBtns" align="center"></div>
			   			</td>
			        </tr>
<!-- 			   	<tr align="center">
			   			<td align="center" colspan="2"><button id="myCompanyFormSubmit_btn" class="btn btn-danger" name="submitBtn" value="submitBtn">Seleccionar</button></td>
			        </tr>
 -->		        </table>
		        <br>
	        </form>
		        <br>
		        <div id="joinCompanyResponse" class="linkQuiniGold">Elige el grupo y pulsa Seleccionar.</div>
		        <br>
		        <table class="tablaQuiniGold">
		        	<tr><td>CREAR GRUPO</td></tr>
			   		<tr align="center">
			   			<td><button id="myCompanyMgrBtn" class="btn btn-danger" name="submitBtn" value="submitBtn">+</button></td>
			        </tr>
		        </table>	        
		</div>
    </div>
    <!-- End MyCompany Form -->
</div>
</div>
<!-- End MyCompany Section -->

<!-- MyCompanyMgr Section -->
<div id="myCompanyMgrDiv" class="page">
<div class="container">
    <!-- AdminCompany Form -->
    <div class="row">
		<div align="center">
		   <form id="adminCompanyForm">
		   		<input type="hidden" name="visibility" value="true"/>
		   		<table class="tablaQuiniGold">
		   			<tr align="center">
						<td colspan="2">Crear Compa�ia</td>
					</tr>
			   		<tr>
			   			<td>Descripci�n:</td>
			   			<td><input class="textbox" id="idCompanyDesc" name="description" type="text"/></td>
			        </tr>
			   		<tr>
			   			<td>Nick:</td>
			   			<td><input class="textbox" name="nick" id="companyNick" type="text"/></td>
			        </tr>
			   		<tr>
			   			<td>Tipo:</td>
			   			<td>
							<select name="type" id="typeCompanyCreate">
								<option value="1">P�blica</option>
								<option value="3">Privada</option>
							</select> 			   			
						</td>
			        </tr>
			   		<tr align="center">
			   			<td colspan="2"><button id="balanceAlterQFormSubmit_btn" class="btn btn-danger" name="submitBtn" value="submitBtn">A�adir</button></td>
			        </tr>
		        </table>
		        <br>
		        <br>
		        <div id="adminCompanyFormResponse" class="linkQuiniGold">A�ade la compa�ia y pulsa A�adir.</div>
	        </form>
		</div>
    </div>
    <!-- End AdminCompany Form -->
</div>
</div>
<!-- End MyCompany Section -->

<!-- Modal -->
<div class="modal fade" id="myCompanyOptions" tabindex="-1" role="dialog" aria-labelledby="myModalLabel1" aria-hidden="true">
 <div class="modal-dialog modal-sm">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <p class="modal-title" id="myModalLabel1">SELECCIONA UNA OPCION</p>
      </div>
      <div class="modal-body" align="center">
      	<table class="tablaQuiniGold">
      		<tr align="center">
      			<td align="center">
					<br>
		  			<button id="myBetsBtn" type="button" class="btn btn-danger btn-block">Mis Apuestas</button>
					<br>
		  			<button id="myRankingBtn" type="button" class="btn btn-danger btn-block">Mi Ranking</button>
					<br>
		  			<button id="myQuiniela" type="button" class="btn btn-danger btn-block">Mi Quiniela</button>
					<br>
		  			<button id="myAdminGr" type="button" class="btn btn-danger btn-block">Admin Grupo</button>
					<br>
					<form id="leaveCompanyForm">
		  				<button id="myDejarGr" type="button" class="btn btn-danger btn-block">Dejar Grupo</button>
		  			</form>
					<br>
      			</td>
      		</tr>
      	</table> 
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Salir</button>
      </div>
    </div><!-- /.modal-content -->
  </div><!-- /.modal-dialog -->
</div>

<!-- Modal Public Companies-->
<div class="modal fade" id="publicCompanyOptions" tabindex="-1" role="dialog" aria-labelledby="myModalLabel2" aria-hidden="true">
 <div class="modal-dialog modal-sm">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <p class="modal-title" id="myModalLabel2">SELECCIONA UNA OPCION</p>
      </div>
      <div class="modal-body" align="center">
      	<table class="tablaQuiniGold">
      		<tr align="center">
      			<td align="center">
					<br>
					<form id="joinCompanyForm">
		  				<button id="myUnirGr" type="button" class="btn btn-danger btn-block">Unirse al Grupo</button>
		  			</form>
					<br>
      			</td>
      		</tr>
      	</table> 
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Salir</button>
      </div>
    </div><!-- /.modal-content -->
  </div><!-- /.modal-dialog -->
</div>
