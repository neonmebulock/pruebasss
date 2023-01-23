


let activateOption = document.querySelector(".activateOption");
let div = document.querySelector(".content");
let contentAside = document.querySelector(".content-aside");
activateOption.addEventListener("click", function() {
    div.classList.add("active");
    contentAside.style.display = 'none';

div.innerHTML = `
<div class="content-aside">
<div class="form-options">
    <div class="options">
        <div> <button style="text-decoration: none; " class="btn btn-requerid icon btn-disabled"
                disabled>add</button>
        </div>
        <div><a href="#" style="text-decoration: none;" class="btn btn-requerid icon" name="btn" type="submit"
                requerid="">code</a>
        </div>
        <div>
            <a href="#" style="text-decoration: none;" class="btn btn-requerid icon" name="btn" type="submit"
                requerid="">print</a>
        </div>
        <a href="#" style="text-decoration: none;" class="btn btn-search-mobile icon">search</a>
        <div>
            <a href="/administrative" style="text-decoration: none;" class="btn btn-exit icon">close</a>
        </div>
    </div>
</div>
</div>
<div class="form-data">
        <div class="head">
            <h1 class="titulo">Agregar</h1>
        </div>
        <div class="body">
            <form>
                <div class="wrap">
                    <div class="first">
                        <label  class="label">Usuario</label>
                        <input class="text" type="text" required="" disabled="">
                        <label class="label">Nombres</label>
                        <input class="text" type="text" required="" autofocus="">
                        <label  class="label">Apellidos</label>
                        <input class="text" type="text" required="">
                        <label class="label">Fecha de nacimiento</label>
                        <input class="date" type="text" placeholder="aaaa-mm-dd" required="">
                        <label class="label">Género</label>
                        <select class="select" name="selectgender" required="">
                            <option value="">Seleccioné</option>
                            <option value="mujer">Mujer</option>
                            <option value="hombre">Hombre</option>
                            <option value="otro">Otro</option>
                            <option value="nodecirlo">Prefiero no decirlo</option>
                        </select>
                        <label class="label">Numero Identifiacion</label>
                        <input class="text" type="number"  placeholder="C.C"  required="">
                    </div>
                    <div class="last">
                    <label class="label">Número de teléfono</label>
                    <input class="text" type="number"  placeholder="9998887766" title="Ingresa un número de teléfono válido." maxlength="10" required="">
                    <label class="label">Nivel de estudios</label>
                    <select class="select" name="selectlevelstudies" required="">
                        <option value="">Seleccioné</option>
                        <option value="Licenciatura">Licenciatura</option>
                        <option value="Ingenieria">Ingenieria</option>
                        <option value="Maestria">Maestria</option>
                        <option value="Doctorado">Doctorado</option>
                    </select>
                    <label class="label">Cargo</label>
                    <input class="text" type="text" placeholder="Cargo" maxlength="100" required="">
                    <label  class="label">Observación</label>
                    <input class="text" type="text" name="txtobservation" placeholder="Observación" maxlength="200">
                    <label class="label">Contraseña</label>
                        <input class="text" type="text" name="txtrfc" placeholder="*******" required="">
                    </div>
                </div>
                <button class="btn icon" type="submit">save</button>
                </form>
                </div>
                </div>
                `;
});



var activateViews = document.getElementsByClassName("btnview");
let divViews = document.querySelector(".content");

for (var i = 0; i < activateViews.length; i++) {
    activateViews[i].addEventListener("click", function() {
divViews.classList.add("active");
contentAside.style.display = 'none';
        divViews.innerHTML = `
        <div class="content-aside">
        <div class="form-options">
            <div class="options">
                <div>
                    <button style="text-decoration: none; " class="btn btn-requerid icon btn-disabled" disabled>add</button>
                </div>
                <div>
                    <a href="#" style="text-decoration: none;" class="btn btn-requerid icon" name="btn" type="submit"
                        requerid="">code</a>
                </div>
                <div><a href="#" style="text-decoration: none;" class="btn btn-requerid icon" name="btn" type="submit"
                        requerid="">print</a>
                </div>
                <a href="#" style="text-decoration: none;" class="btn btn-search-mobile icon">search
                </a>
                <div>
                    <a href="/administrative" style="text-decoration: none;" class="btn btn-exit icon">close</a>
                </div>
            </div>
            <div class="search">
                <div class="barra"> <input type="text" class="text-search" id="txtSearch" name="search"
                        placeholder="Buscar..." autofocus="">
                    <button id="btnSearch" class="btn-search icon" type="submit">search</button>
                </div>
            </div>
        </div>
        </div>
        <div class="form-data">
        <div class="head">
            <h1 class="titulo">Visualizacion</h1>
        </div>
        <div class="body">
            <form>
                <div class="wrap">
                    <div class="first">
                        <label for="txtuserid" class="label">Usuario</label>
                        <input class="text" type="text" disabled />
                        <label for="txtusername" class="label">Nombre</label>
                        <input class="text" type="text" disabled />
                        <label for="txtusersurnames" class="label">Apellidos</label>
                        <input class="text" type="text" disabled />
                        <label for="dateofbirth" class="label">Fecha de nacimiento</label>
                        <input class="date" type="text" placeholder="aaaa-mm-dd" disabled />
                        <label for="selectgender" class="label">Género</label>
                        <select class="select" name="selectgender" disabled>
                            <option value="">Seleccioné</option>
                            <option value="mujer">Mujer</option>
                            <option value="hombre">Hombre</option>
                            <option value="otro">Otro</option>
                            <option value="nodecirlo">Prefiero no decirlo</option>
                        </select>
                        <label for="txtusercurp" class="label">CURP</label>
                        <input class="text" type="text name=" txtcurp" placeholder="Clave Única de Registro de Población"
                            pattern="[A-Za-z0-9]{18}" maxlength="18" disabled />
                    </div>
                    <div class="last">
                        <label for="txtuserrfc" class="label">RFC</label>
                        <input class="text" type="text" name="txtrfc" placeholder="XAXX010101000" disabled />
                        <label for="txtuserphone" class="label">Número de teléfono</label>
                        <input class="text" type="text" name="txtphone" placeholder="9998887766"
                            title="Ingresa un número de teléfono válido." maxlength="10" disabled />
                        <label for="txtuseraddress" class="label">Domicilio</label>
                        <input class="text" type="text" name="txtaddress" placeholder="Domicilio" maxlength="200"
                            disabled />
                        <label for="selectuserlevelstudies" class="label">Nivel de estudios</label>
                        <select class="select" name="selectlevelstudies" disabled>
                            <option value="">Seleccioné</option>
                            <option value="Licenciatura">Licenciatura</option>
                            <option value="Ingenieria">Ingenieria</option>
                            <option value="Maestria">Maestria</option>
                            <option value="Doctorado">Doctorado</option>
                        </select>
                        <label for="txtuseroccupation" class="label">Cargo</label>
                        <input class="text" type="text" name="txtoccupation" placeholder="Cargo" maxlength="100" disabled />
                        <label for="txtuserobservation" class="label">Observación</label>
                        <input class="text" type="text" name="txtobservation" placeholder="Observación" maxlength="200"
                            disabled />
                    </div>
                </div>
                <button class="btn icon" type="submit">done</button>
                </form>
        </div>
        </div>
        `;
    });
    // activateViews.addEventListener("click", function() {
    // });
}

var activateDelete = document.getElementsByClassName("btndelete");
let divDelete = document.querySelector(".content");
for (var i = 0; i < activateDelete.length; i++) {
    activateDelete[i].addEventListener("click", function() {
    divDelete.classList.add("active");
    contentAside.style.display = 'none';
    divViews.innerHTML = `
    <div class="form-data">
        <div class="head">
            <h1>Atención</h1>
        </div>
        <div class="delete">
            <h1>¿Estas seguro?</h1>
            <h2>¡Se borrará de forma permanente!</h2>
            <button id="btnYesDelete" class="btn-si" type="submit" autofocus="">¡Si, bórralo!</button>
                <button id="btnNoDelete" class="btn-no"  type="submit">Cancelar</button>
        </div>
    </div>
    `;
});
}

// document.querySelector('.activateOption').addEventListener('click', () => {
//     document.querySelector('.content').appendChild = '<div ><%- resul %></div>';
//   });
