<template> 
    <header>
        <nav class="navbar navbar-expand-md navbar-light bg-light shadow p-0">
            <div class="container-fluid g-2">
                <a href="/" class="navbar-brand p-0">
                    <img src="../assets/image/logo.png" width="70" height="70">
                </a>
                <form class="w-50 col-sm-6">

                </form>

                <div class="navbar-nav">
                    <div class="col">
                        <div class="d-flex justify-content-between justify-content-lg-end mt-lg-2">
                            <div class="nav-item mt-1 d-sm-block d-md-none">
                                <i class="nav-link bi bi-ui-checks-grid" data-bs-toggle="offcanvas"
                                    data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"
                                    style="font-size: 1.5rem; color: var(--ff-dark-blue);"></i>
                                <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasRight"
                                    aria-labelledby="offcanvasRightLabel">
                                    <div class="offcanvas-header justify-content-end m-0">
                                        <i class="bi bi-arrow-bar-left" data-bs-dismiss="offcanvas"
                                            aria-label="Close"></i>
                                    </div>
                                    <div class="offcanvas-body m-0 p-0">



                                        <div class="shadow card m-3">
                                            <div class="card-header text-center">
                                                <b>Community</b>
                                            </div>

                                            <div class="card-body">
                                                <div class="row">
                                                    <div class="d-flex justify-content-between">
                                                        <label class="px-2" for="switch-subscriptions">My
                                                            subscriptions</label>
                                                        <div class="form-check form-switch px-2">
                                                            <input class="form-check-input" type="checkbox"
                                                                id="switch-subscriptions">
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="row">
                                                    <div class="d-flex justify-content-between">
                                                        <label class="px-2" for="switch-subscribers">My
                                                            subscribers</label>
                                                        <div class="form-check form-switch px-2">
                                                            <input class="form-check-input" type="checkbox"
                                                                id="switch-subscribers">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>



                                        <div class="d-grid m-3">
                                            <a class="btn btn-primary ff-btn-bicolor" href="/preferences/clubs/grid/">Choose your clubs !</a>
                                        </div>



                                        <div class="shadow card m-3">
                                            <div class="card-header text-center">
                                                <b>My fan club</b>
                                            </div>
                                            <div class="card-body">
                                                <div class="row">
                                                    <div class="d-flex justify-content-between">
                                                        <a href="/mohammed-harnoufi-0671/group/fan/"
                                                            class="link-secondary text-decoration-none">
                                                            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/190px-FC_Barcelona_%28crest%29.svg.png"
                                                                class="rounded-circle" height="20" width="20">
                                                            <label class="flex-grow-1 ms-3">Barcelona</label>
                                                        </a>
                                                        <div class="form-check form-switch px-2">
                                                            <input class="form-check-input switch-fan" type="checkbox"
                                                                id="switch-fan">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>



                                        <div class="shadow card m-3">
                                            <div class="card-header text-center">
                                                <b>My rival clubs</b>
                                            </div>
                                            <div class="card-body">

                                                <div class="row mb-1">
                                                    <div class="d-flex justify-content-between">
                                                        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Real_Madrid_CF.svg/150px-Real_Madrid_CF.svg.png"
                                                            class="rounded-circle" height="20" width="20">
                                                        <label class="flex-grow-1 ms-3 px-2 d-md-none d-lg-block"
                                                            for="switch-rival-16">Real Madrid</label>
                                                        <div class="form-check form-switch px-2">
                                                            <input class="form-check-input switch-rival" type="checkbox"
                                                                id="switch-rival-16">
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>



                                        <div class="shadow card m-3">
                                            <div class="card-header text-center">
                                                <b>My followed clubs</b>
                                            </div>
                                            <div class="card-body">

                                                <div class="row mb-1">
                                                    <div class="d-flex justify-content-between">
                                                        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Manchester_City_FC_badge.svg/180px-Manchester_City_FC_badge.svg.png"
                                                            class="rounded-circle" height="20" width="20">
                                                        <label class="flex-grow-1 ms-3 px-2 d-md-none d-lg-block"
                                                            for="switch-followed-91">Manchester City</label>
                                                        <div class="form-check form-switch px-2 ">
                                                            <input class="form-check-input switch-follow"
                                                                type="checkbox" id="switch-followed-91">
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </div>
                            <div class="nav-item">
                                <a class="nav-link mt-1" href="/mohammed-harnoufi-0671" style="text-decoration: none;">


                                    <div class="position-relative">

                                        <img src="../assets/image/Portrait_Placeholder.png" width="35"
                                            height="35"
                                            class="rounded-circle border border-1 border-white bg-white p-0 m-1 mt-0">
                                        <span
                                            class="position-absolute bottom-0 start-50  border-light rounded-circle p-0">
                                            <img class="rounded-circle border border-1 border-white bg-white m-1 p-0"
                                                height="15" width="15" src="
                    https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/190px-FC_Barcelona_%28crest%29.svg.png
                ">
                                        </span>


                                    </div>

                                </a>
                            </div>
                            <div class="nav-item mt-1">
                                <i class="nav-link bi bi-pencil-fill" data-bs-toggle="modal" data-bs-target="#baseModal"
                                    style="font-size: 1.5rem; color: var(--ff-dark-blue);">

                                </i>
                            </div>

                            <div class="nav-item mt-1">
                                <a class="nav-link" href="#"><i class="bi bi-bell-fill"
                                        style="font-size: 1.5rem; color: gray;"></i></a>
                            </div>
                            <div class="nav-item mt-1">
                                <a class="nav-link" href="#"> <i class="bi bi-people-fill"
                                        style="font-size: 1.5rem; color: gray;"></i></a>
                            </div>

                            <div class="nav-item mt-1">
                                <div class="dropdown nav-item">
                                    <div type="button" data-bs-toggle="dropdown" id="dropdownSettingsButton">
                                        <i class="nav-link bi bi-gear-fill"
                                            style="font-size: 1.5rem; color: var(--ff-dark-blue);"></i>
                                    </div>
                                    <div class="dropdown-menu dropdown-menu-end dropdown-menu-start p-0">
                                        <a class="dropdown-item p-2" href="/settings/bio/">My bio</a>
                                        <a class="dropdown-item p-2" href="/settings/account/">My account</a>
                                        <a class="dropdown-item p-2 disabled" href="#">My notifications</a>
                                        <a class="dropdown-item p-2" href="/settings/social-media/">My social media</a>
                                        <a class="dropdown-item text-danger p-2" href="/accounts/logout/"><i
                                                class="bi bi-power"></i>&nbsp; Déconnexion</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </header>



    <section id="content">

        <div class="container-fluid m-0">

            <div class="p-0 m-0 rounded-2 text-center">
                <div class="mt-3 mb-0 alert alert-info alert-dismissible fade show" role="alert">
                    2022 Qatar World Cup is currently running ! <router-link to="/world-cup/" class="alert-link">Click here</router-link>

                    to join the event !
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            </div>


            <div class="row">
                <div class="col-sm-3 p-0 d-none d-md-block">



                    <div class="shadow card m-3 d-sm-none d-lg-block">
                        <div class="row">
                            <div class="col-sm-5">
                                <div id="picture-bg">
                                    <a href="/mohammed-harnoufi-0671">


                                        <div class="position-relative">

                                            <img src="../assets/image/Portrait_Placeholder.png"
                                                class="rounded-circle border border-1 border-white p-0 m-1"
                                                id="id_profile_image" height="100" width="100">
                                            <span
                                                class="position-absolute bottom-0 start-50 border-light rounded-circle p-1">
                                                <img class="rounded-circle border border-1 border-white bg-white m-0 p-0"
                                                    height="35" width="35" src="
                https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/190px-FC_Barcelona_%28crest%29.svg.png
            ">
                                            </span>


                                        </div>

                                    </a>
                                </div>
                            </div>
                            <div class="col-sm-6 offset-1 text-center">
                                <div class="row">
                                    <h5 class="pt-2 profile-name fs-5 fs-md-4">Mohammed Harnoufi</h5>
                                </div>
                            </div>
                        </div>
                    </div>




                    <div class="shadow card m-3">
                        <div class="card-header text-center">
                            <b>Community</b>
                        </div>

                        <div class="card-body">
                            <div class="row">
                                <div class="d-flex justify-content-between">
                                    <label class="px-2" for="switch-subscriptions">My subscriptions</label>
                                    <div class="form-check form-switch px-2">
                                        <input class="form-check-input" type="checkbox" id="switch-subscriptions">
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="d-flex justify-content-between">
                                    <label class="px-2" for="switch-subscribers">My subscribers</label>
                                    <div class="form-check form-switch px-2">
                                        <input class="form-check-input" type="checkbox" id="switch-subscribers">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div class="d-grid m-3">
                        <a class="btn btn-primary ff-btn-bicolor" href="/preferences/clubs/grid/">Choose your clubs
                            !</a>
                    </div>



                    <div class="shadow card m-3">
                        <div class="card-header text-center">
                            <b>My fan club</b>
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="d-flex justify-content-between">
                                    <a href="/mohammed-harnoufi-0671/group/fan/"
                                        class="link-secondary text-decoration-none">
                                        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/190px-FC_Barcelona_%28crest%29.svg.png"
                                            class="rounded-circle" height="20" width="20">
                                        <label class="flex-grow-1 ms-3">Barcelona</label>
                                    </a>
                                    <div class="form-check form-switch px-2">
                                        <input class="form-check-input switch-fan" type="checkbox" id="switch-fan">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div class="shadow card m-3">
                        <div class="card-header text-center">
                            <b>My rival clubs</b>
                        </div>
                        <div class="card-body">

                            <div class="row mb-1">
                                <div class="d-flex justify-content-between">
                                    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Real_Madrid_CF.svg/150px-Real_Madrid_CF.svg.png"
                                        class="rounded-circle" height="20" width="20">
                                    <label class="flex-grow-1 ms-3 px-2 d-md-none d-lg-block" for="switch-rival-16">Real
                                        Madrid</label>
                                    <div class="form-check form-switch px-2">
                                        <input class="form-check-input switch-rival" type="checkbox"
                                            id="switch-rival-16">
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>



                    <div class="shadow card m-3">
                        <div class="card-header text-center">
                            <b>My followed clubs</b>
                        </div>
                        <div class="card-body">

                            <div class="row mb-1">
                                <div class="d-flex justify-content-between">
                                    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Manchester_City_FC_badge.svg/180px-Manchester_City_FC_badge.svg.png"
                                        class="rounded-circle" height="20" width="20">
                                    <label class="flex-grow-1 ms-3 px-2 d-md-none d-lg-block"
                                        for="switch-followed-91">Manchester City</label>
                                    <div class="form-check form-switch px-2 ">
                                        <input class="form-check-input switch-follow" type="checkbox"
                                            id="switch-followed-91">
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>



                </div>

                <div class="col-md-6">
                    <div id="thread-list-container">


                        <link href="/static/tree_ant/css/thread.css" rel="stylesheet">






                        

                    </div>

                    <div id="loading" class="d-flex justify-content-center">
                        <img src="../assets/image/infinity-animation.gif" alt="Loading..." width="50" height="50">
                    </div>
                </div>

            </div>
        </div>

    </section>



    <div class="modal fade" tabindex="-1" id="baseModal" aria-hidden="true">
        <div class="modal-dialog modal-lg">

            <div class="modal-content">

                <div class="modal-header">
                    <h5 class="modal-title"></h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>



                <div class="modal-body">


                </div>



                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
                    <button type="button" class="btn btn-primary">Submit</button>
                </div>

            </div>

        </div>
    </div>



    <div class="modal fade" id="galleryModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-xl">
            <div class="modal-content border-0">
                <div id="modal-body-gallery">
                </div>
            </div>
        </div>
    </div>
</template>
<style>


.btn-primary {
    color: #fff;
    background-color: #0d6efd;
    border-color: #0d6efd;
}

 
.ff-btn-bicolor {
    background: linear-gradient(to right, var(--ff-dark-blue), var(--ff-cyan));
}

.btn {
    display: inline-block;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    text-align: center;
    text-decoration: none;
    vertical-align: middle;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    background-color: transparent;
    border: 1px solid transparent;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    border-radius: 0.25rem;
    transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
}
 a {
    color: #0d6efd;
    text-decoration: underline;
}
*, ::after, ::before {
    box-sizing: border-box;
}

*, ::after, ::before {
    box-sizing: border-box;
}
*, ::after, ::before {
    box-sizing: border-box;
}
*, ::after, ::before {
    box-sizing: border-box;
}
user agent stylesheet
a:-webkit-any-link {
    color: -webkit-link;
    cursor: pointer;
    text-decoration: underline;
}
.row {
    --bs-gutter-x: 1.5rem;
    --bs-gutter-y: 0;
    display: flex;
    flex-wrap: wrap;
    margin-top: calc(var(--bs-gutter-y)* -1);
    margin-right: calc(var(--bs-gutter-x)* -.5);
    margin-left: calc(var(--bs-gutter-x)* -.5);
}


        :root {
            --ff-dark-blue: #13007C;
            --ff-blue: #2E58A6;
            --ff-light-blue: #0488BB;
            --ff-cyan: #00A0C6;
            --ff-green: #5CB860;
        }



        :root {
            scroll-behavior: smooth;
        }

       
        *,
        ::after,
        ::before {
            box-sizing: border-box;
        }

        user agent stylesheet:root {
            view-transition-name: root;
        }

        user agent stylesheet html {
            display: block;
        }

        *,
        ::after,
        ::before {
            box-sizing: border-box;
        }

        *,
        ::after,
        ::before {
            box-sizing: border-box;
        }
    </style>