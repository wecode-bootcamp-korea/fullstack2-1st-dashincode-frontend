import React from 'react';
import { Link } from 'react-router-dom';
import './MainCategory.scss';
import category from './category';

const MainCategory = () => {
  return (
    <div className="MainCategory">
      <div className="categoryWrap">
        <ul className="mainMenu">
          {category.map((data, id) => {
            const name = '/category/' + data.id;
            return (
              <li className="mainMenuList" key={id}>
                <Link to={name}>{data.name}</Link>
                <ul className="subMenu">
                  <li className="eachSubMenu">
                    <ul className="subMenuList">
                      {data.list.map((list, id) => {
                        const name = '/category/' + data.id + '/' + list.id;
                        return (
                          <li key={id}>
                            <Link className="linkToSubMenu" to={name}>
                              {list.name}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                    {data.product.map((data, id) => {
                      const name = '/product/' + data.id;
                      return (
                        <div className="categoryImage" key={id}>
                          <Link to={name}>
                            <img alt="" src={data.image_url} />
                          </Link>
                          <Link to={name}>
                            <p>{data.name}</p>
                          </Link>
                        </div>
                      );
                    })}
                  </li>
                </ul>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default MainCategory;