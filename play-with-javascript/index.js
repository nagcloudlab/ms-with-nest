//-----------------------------------------
// publisher/producer/
//-----------------------------------------
const trainer = {
    getSubjectAsync() {
        let promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                let subject = 1;
                console.log("trainer resolving/pushing a subject")
                resolve(subject)

                // console.log("trainer rejecting/pushing a error")
                // reject(new Error("subject-error"))
            }, 5000)
        })
        return promise;
    }
}

//-----------------------------------------
// publisher/producer/
//-----------------------------------------
const manager = {
    getWorkAsync() {
        let promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                let work = 10;
                console.log("manager resolving/pushing a work")
                resolve(work)
            }, 8000)
        })
        return promise;
    }
}
//-----------------------------------------
// Subscriber/consumer/
//-----------------------------------------

const employee = {
    async doWork() {
        // console.log("emp requesting a subject on trainer")
        // const trainerPromise = trainer.getSubjectAsync(); // push / async / non-blocking-call
        // console.log("emp got promise from trainer, defering learn & work actions to future")
        // trainerPromise
        //     .then(sub => {
        //         console.log("employee reacting/learning to sub-" + sub)
        //         const managerPromise = manager.getWorkAsync()
        //         managerPromise
        //             .then(work => {
        //                 console.log("employee reacting/working, work-" + work + " with subject - " + sub)
        //             })
        //     })
        //     .catch(err => {
        //         console.log("employee reacting to error " + err)
        //     })
        // console.log("emp responding to other emais in work-life")

        this.learnAndWork();
        console.log("emp responding to other emails in work-life")

    },
    async learnAndWork() {
        console.log("emp requesting a subject on trainer")
        const sub = await trainer.getSubjectAsync();
        console.log("employee reacting/learning to sub-" + sub)
        const work = await manager.getWorkAsync()
        console.log("employee reacting/working, work-" + work + " with subject - " + sub)
    }
}


employee.doWork();