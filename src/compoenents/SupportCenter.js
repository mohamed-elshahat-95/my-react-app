import "./SupportCenter.css";

function SupportCenter() {
  return (
    <>
      <div className="container bootstrap snippets bootdey">
        <div className="row">
          <div className="col-sm-12">
            <h1 className="title-lg first-child text-center text-primary">
              <span>Support Center</span>
            </h1>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-4 col-lg-3">
            <h3 className="title-block first-child">Quick Search</h3>
            <form>
              <label htmlFor="search" className="sr-only">
                Search
              </label>
              <input
                type="search"
                className="form-control"
                id="search"
                placeholder="Search here..."
              />
            </form>
            <h3 className="title-block">Helpful Links</h3>
            <div className="menu-lg">
              <div className="item">
                <i className="fa fa-users text-primary"></i>
                <div className="content">
                  <div className="title">
                    <a href="/">
                      <span className="text-red">Online</span> Support
                    </a>
                  </div>
                  <div className="description">
                    Lorem ipsum dolor sit amet, consectetur.
                  </div>
                </div>
              </div>
              <div className="item">
                <i className="fa fa-unlock-alt text-primary"></i>
                <div className="content">
                  <div className="title">
                    <a href="/">
                      <span className="text-red">Data</span> Protection
                    </a>
                  </div>
                  <div className="description">
                    Lorem ipsum dolor sit amet, consectetur.
                  </div>
                </div>
              </div>
              <div className="item">
                <i className="fa fa-legal text-primary"></i>
                <div className="content">
                  <div className="title">
                    <a href="/">
                      <span className="text-red">Legal</span> Info
                    </a>
                  </div>
                  <div className="description">
                    Lorem ipsum dolor sit amet, consectetur.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-8 col-lg-9">
            <h3 className="title-block second-child">General Questions</h3>
            <div className="panel-group" id="faqList">
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h4 className="panel-title">
                    <a
                      data-toggle="collapse"
                      data-parent="#faqList"
                      href="#questionOne"
                      className="collapsed"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ut ac tortor vitae lorem lobortis.
                    </a>
                  </h4>
                </div>
                <div id="questionOne" className="panel-collapse collapse">
                  <div className="panel-body">
                    <p>
                      Donec massa urna, tristique sed lectus quis, suscipit
                      ultricies velit. Curabitur pulvinar rutrum risus eu
                      aliquet. Vestibulum at felis et ipsum lacinia fringilla.
                      Praesent blandit ultricies velit non euismod. Integer
                      fringilla, ipsum eu adipiscing venenatis, nisl nisl
                      fermentum sem, nec suscipit felis arcu in augue. Nunc ac
                      blandit lorem. Maecenas auctor justo odio, at eleifend
                      nulla venenatis quis. Aenean semper, libero ac dictum
                      bibendum, enim augue lacinia neque, quis aliquam lacus
                      nulla sed nisi. Etiam eleifend scelerisque odio sit amet
                      fermentum. Etiam at nunc est. Nam eu lobortis nulla.
                      Pellentesque consectetur augue neque, ut porttitor massa
                      tincidunt egestas. Fusce diam tellus, convallis rutrum
                      faucibus porta, venenatis non velit. Nulla non convallis
                      urna, lacinia mollis massa. Nam consequat tristique felis
                      a egestas.
                    </p>
                  </div>
                </div>
              </div>
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h4 className="panel-title">
                    <a
                      data-toggle="collapse"
                      data-parent="#faqList"
                      href="#questionTwo"
                      className="collapsed"
                    >
                      Ut ac tortor vitae lorem lobortis vulputate eget ac nisi.
                      Fusce diam tellus.
                    </a>
                  </h4>
                </div>
                <div id="questionTwo" className="panel-collapse collapse">
                  <div className="panel-body">
                    <p>
                      Donec massa urna, tristique sed lectus quis, suscipit
                      ultricies velit. Curabitur pulvinar rutrum risus eu
                      aliquet. Vestibulum at felis et ipsum lacinia fringilla.
                      Praesent blandit ultricies velit non euismod. Integer
                      fringilla, ipsum eu adipiscing venenatis, nisl nisl
                      fermentum sem, nec suscipit felis arcu in augue. Nunc ac
                      blandit lorem. Maecenas auctor justo odio, at eleifend
                      nulla venenatis quis. Aenean semper, libero ac dictum
                      bibendum, enim augue lacinia neque, quis aliquam lacus
                      nulla sed nisi. Etiam eleifend scelerisque odio sit amet
                      fermentum. Etiam at nunc est. Nam eu lobortis nulla.
                      Pellentesque consectetur augue neque, ut porttitor massa
                      tincidunt egestas. Fusce diam tellus, convallis rutrum
                      faucibus porta, venenatis non velit. Nulla non convallis
                      urna, lacinia mollis massa. Nam consequat tristique felis
                      a egestas.
                    </p>
                  </div>
                </div>
              </div>
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h4 className="panel-title">
                    <a
                      data-toggle="collapse"
                      data-parent="#faqList"
                      href="#questionThree"
                      className="collapsed"
                    >
                      Donec massa urna, tristique sed lectus quis, suscipit
                      ultricies velit.
                    </a>
                  </h4>
                </div>
                <div id="questionThree" className="panel-collapse collapse">
                  <div className="panel-body">
                    <p>
                      Donec massa urna, tristique sed lectus quis, suscipit
                      ultricies velit. Curabitur pulvinar rutrum risus eu
                      aliquet. Vestibulum at felis et ipsum lacinia fringilla.
                      Praesent blandit ultricies velit non euismod. Integer
                      fringilla, ipsum eu adipiscing venenatis, nisl nisl
                      fermentum sem, nec suscipit felis arcu in augue. Nunc ac
                      blandit lorem. Maecenas auctor justo odio, at eleifend
                      nulla venenatis quis. Aenean semper, libero ac dictum
                      bibendum, enim augue lacinia neque, quis aliquam lacus
                      nulla sed nisi. Etiam eleifend scelerisque odio sit amet
                      fermentum. Etiam at nunc est. Nam eu lobortis nulla.
                      Pellentesque consectetur augue neque, ut porttitor massa
                      tincidunt egestas. Fusce diam tellus, convallis rutrum
                      faucibus porta, venenatis non velit. Nulla non convallis
                      urna, lacinia mollis massa. Nam consequat tristique felis
                      a egestas.
                    </p>
                  </div>
                </div>
              </div>
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h4 className="panel-title">
                    <a
                      data-toggle="collapse"
                      data-parent="#faqList"
                      href="#collapseFour"
                      className=""
                    >
                      Aliquam in convallis mauris. Praesent id varius metus.
                      Phasellus rutrum posuere velit.
                    </a>
                  </h4>
                </div>
                <div id="collapseFour" className="panel-collapse collapse in">
                  <div className="panel-body">
                    <p>
                      Donec massa urna, tristique sed lectus quis, suscipit
                      ultricies velit. Curabitur pulvinar rutrum risus eu
                      aliquet. Vestibulum at felis et ipsum lacinia fringilla.
                      Praesent blandit ultricies velit non euismod. Integer
                      fringilla, ipsum eu adipiscing venenatis, nisl nisl
                      fermentum sem, nec suscipit felis arcu in augue. Nunc ac
                      blandit lorem. Maecenas auctor justo odio, at eleifend
                      nulla venenatis quis. Aenean semper, libero ac dictum
                      bibendum, enim augue lacinia neque, quis aliquam lacus
                      nulla sed nisi. Etiam eleifend scelerisque odio sit amet
                      fermentum. Etiam at nunc est. Nam eu lobortis nulla.
                      Pellentesque consectetur augue neque, ut porttitor massa
                      tincidunt egestas. Fusce diam tellus, convallis rutrum
                      faucibus porta, venenatis non velit. Nulla non convallis
                      urna, lacinia mollis massa. Nam consequat tristique felis
                      a egestas.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SupportCenter;
