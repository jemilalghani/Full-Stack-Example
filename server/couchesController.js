module.exports={
    getCouches:(req,res)=>{
        req.app.get('db').get_couches().then(couches=>{
            res.json(couches);
        }).catch(error=>{
            console.error('error in Get couches', error);
            res.status(500).json({message:'bruh, you cannot even get'})
        })
    },
    postCouch: (req,res)=>{
        req.app.get('db').create_couch({
            user_id: req.sesson.user.id,
            name:req.body.name,
            price:req.body.price,
            image:req.body.image
        }).then(couches=>{
            res.json(couches[0]);
        }).catch(error=>{
            console.error('error in Post couches', error);
            res.status(500).json({message: 'bruh, posting is not for you'})
        })
    }
}