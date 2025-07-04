import React from 'react'
function About() {
    return (
        <div className='container'>
            <div className="card">
                <div className="card-header">
                    INOTEBOOK
                </div>
                <div className="card-body">
                    <figure>
                        <blockquote className="blockquote d-flex">
                            <div>iNotebook is a modern, secure, cloud-based notebook designed to help you store, organize, and access your books, notes, and ideas anytime, anywhere.
                                With iNotebook, you no longer have to worry about losing your notes or carrying heavy notebooks. All your content is safely stored in the cloud, instantly synced across your devices, and ready whenever you need it.

                                Whether it’s study material, personal journals, creative writing, or important references — iNotebook keeps everything organized and easily searchable, so you can focus on what matters most: your ideas.

                                Features:
                                <div className="point d-flex flex-column">
                                    <div>✅ Create, edit, and manage your books and notes effortlessly</div>
                                   <div> ✅ Access your notebook from any device, anytime</div>
                                   <div> ✅ Secure cloud storage keeps your data safe</div>
                                    <div>✅ Simple and clean interface for distraction-free writing.</div>
                                </div>
                         </div>
                    
                        </blockquote>
                        <figcaption className="blockquote-footer">
                             <cite title="Source Title my-3">Built for everyone</cite>
                        </figcaption>
                    </figure>
                </div>
            </div>
        </div>
    )

}

export default About;
