window.trackingApp = new Tracking({
    debug: true,

    handlers () {
        this.on('NewCV', ({ ga }, payload) => {
            gtag('event', 'NewCV');
        })
        this.on('NewCVFB', ({ fbq }, payload) => {
            fbq('trackCustom', 'NewCVFB');
        })
        this.on('NewCVGG', ({ gtag }, payload) => {
            gtag('event', 'NewCVGG', { 'send_to': 'AW-823531084/MJAZCIakmdgBEMys2IgD' });
        })
        this.on('NewUser', ({ ga }, payload) => {
            gtag('event', 'NewUser');
        })
        this.on('NewUserFB', ({ fbq }, payload) => {
            fbq('trackCustom', 'NewUserFB');
        })
        this.on('NewUserGG', ({ gtag }, payload) => {
            gtag('event', 'NewUserGG', { 'send_to': 'AW-823531084/YRfKCIPOp9gBEMys2IgD' });
        })
    }
})

if (trackingQueue) {
    trackingApp.setQueue(trackingQueue).processQueue()
}

$(document).ajaxSuccess(function (event, xhr, settings) {
    console.log('ajaxSuccess');
    let response = xhr.responseJSON
    if (response.tracking_queue) {
        trackingApp.setQueue(response.tracking_queue).processQueue()
    }
})
