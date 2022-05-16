import React from 'react'

export const Footer = () => {
    return (
        <>
            <div className="container-fluid text-white" style={{background: '#061429'}}>
                <div className="container text-center">
                    <div className="row justify-content-end">
                        <div className="col-lg-8 col-md-6">
                            <div className="d-flex align-items-center justify-content-center" style={{height: '75px'}}>
                                <p className="mb-0">&copy; <a className="text-white border-bottom" href="#">Your Site Name</a>. All Rights Reserved.
                                              
                                Designed by <a className="text-white border-bottom" href="https://htmlcodex.com">HTML Codex</a></p>
                                Distributed By: <a className="border-bottom" href="https://themewagon.com" target="_blank">ThemeWagon</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
