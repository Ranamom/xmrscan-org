import * as React from 'react';
import './nav.scss';
import { NodeDropdown } from 'components/node-dropdown';
import { SearchInput } from 'components/search-input';
import { NavLink } from 'react-router-dom';
import { OutsideAlerter } from 'components/outside-click';
import { Select } from 'components/node-dropdown/components/select-node';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const Logo = () => (
  <img
    width="150px"
    src="data:image/png;base64,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"
  />
);

export class Nav extends React.Component {
  public state = {
    open: false
  };

  public toggleDrawer = () => {
    this.setState({ open: !this.state.open });
  };

  public render() {
    const { toggleDrawer } = this;
    const { open } = this.state;
    return (
      <>
        <nav className="Navigation">
          <div className="Navigation-wrapper">
            <button
              className="Navigation-open-drawer"
              onClick={() => this.setState({ open: true })}
            >
              <i className="nc-icon nc-ic_menu_24px size_24px" />
            </button>
            <NavLink to="/" className="Navigation-title">
              <Logo />
            </NavLink>
            <div className="flex-spacer" />
            <SearchInput />
            <div className="flex-spacer" />
            <NodeDropdown />
          </div>
        </nav>
        <TransitionGroup>
          {open && (
            <CSSTransition classNames="Navigation-Drawer-animation" timeout={200}>
              <aside className="Navigation-Drawer-wrapper">
                <OutsideAlerter onClick={this.toggleDrawer}>
                  <nav className="Navigation-Drawer">
                    <header className="Navigation-Drawer-header">
                      <NavLink to="/" className="Navigation-title" onClick={toggleDrawer}>
                        <Logo />
                      </NavLink>
                    </header>
                    <Select onSelect={toggleDrawer} />
                  </nav>
                </OutsideAlerter>
              </aside>
            </CSSTransition>
          )}
        </TransitionGroup>
      </>
    );
  }
}
