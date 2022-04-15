import React from 'react';
import '../Loading/Loading.css'

function Loading(Component) {
    return function withLoadingComponent({ isLoading, data }) {
        if (isLoading) {
            return (
                <div class="position-absolute top-50 start-50 translate-middle  fs-5">
                    <div class="loader">
                        <div class="ball"></div>
                        <div class="ball"></div>
                        <div class="ball"></div>
                        <div class="ball"></div>
                    </div>
                    <div class="loader">
                        <div class="mirror">
                            <div class="ball"></div>
                            <div class="ball"></div>
                            <div class="ball"></div>
                            <div class="ball"></div>
                        </div>
                    </div>
                    <div class="loader">
                        <div class="mirror two">
                            <div class="ball"></div>
                            <div class="ball"></div>
                            <div class="ball"></div>
                            <div class="ball"></div>
                        </div>
                    </div>
                    <div class="loader">
                        <div class="mirror three">
                            <div class="ball"></div>
                            <div class="ball"></div>
                            <div class="ball"></div>
                            <div class="ball"></div>
                        </div>
                    </div>
                    <div class="more">
                        <a target="_top" href="https://codepen.io/josetxu/pen/bGaKQBB">x4</a>
                        <a target="_top" href="https://codepen.io/josetxu/pen/gOoKQga">x8</a>
                        <a target="_top" href="https://codepen.io/josetxu/pen/KKZerBQ">x16</a>
                        <span>x32</span>
                    </div>
                </div>
            )
        } else {
            return (
                <Component data={data} />
            );
        }
    }
}

export default Loading;