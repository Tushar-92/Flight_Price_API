
function getFare(req, res) {
    let source = req.body.Source;
    let destination = req.body.Destination;

    if(source == 'Delhi' && destination == 'Jaipur') {
        let fareForThisRoute = {
            "indigo": "₹1,614",
            "airAsia": "₹1,869",
            "vistara": "₹2,133"
          } 
        
        res.status(200).json({"Fares of different Airlines for this route": fareForThisRoute}); 
    }else {
        res.status(400).json({error: 'Bad parameters. Route not find'});
    } 
    
}

module.exports = {
    getFare
}