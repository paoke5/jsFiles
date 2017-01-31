/*!
 * paoke.design v5.0 
 * Copyright 2008-2016 POAKE, Inc.
 * Licensed under the MIT license
 */

var getDesignFunctionList = function () {
    var fl = [];

    var functionNames = [];

    for (var f in $designFunctions) {
        if ($designFunctions.hasOwnProperty(f) && typeof $designFunctions[f] === 'function' && f != 'executeFN' && f != 'executeFNDev') {
            var fAttr = {
                name: f,
                args: $designFunctions[f].length
            }
            functionNames.push(fAttr);
        }
    }

    return functionNames;
}

var $designFunctions = { 
    executeFN: function (functionName, context, args) {
        var args = [].slice.call(arguments).splice(2); 
        var func = namespaces.pop();
        for (var i = 0; i < namespaces.length; i++) {
            context = context[namespaces[i]];
        }
        return context[func].apply(context, args);
    },
    executeFNDev: function(functionName, context, args) { 
        var namespaces = functionName.split(".");
        var func = namespaces.pop();
        for(var i = 0; i < namespaces.length; i++) {
            context = context[namespaces[i]];
        }
        return context[func].apply(context, args);
    }, 
    slsTest: function(item1, item2, item3, item4){
        var rows = [[6, 6], [4, 8]]; //(da) ? JSON.parse(da) :,
        var sls = $pb.create.row('score', rows);
        sls.appendAll([
           item1,
           item2,
           item3,
           item4
        ]);
        sls.attrAll('cpt')
        return sls.$element;
    }, 
    portHeader: function (item1) { // KEEP
        var $e1 = __cr.div('', 'portlet-heading', '', ''),
        $e2 = __cr.h(item1, '3', 'portlet-title text-dark text-uppercase'),
        $e3 = __cr.div('', 'portlet-widgets', '', ''),
        $e10 = __cr.a('#', '', '', ''),
        $e11 = __cr.i('fa fa-times', '', '', '');

        //$e10.append($e11);
        $e3.append($e10);
        $e1.append($e2).append($e3); 

        return $e1;
    },  
    teamMember: function (item1, item2, item3) {

        if (!(this instanceof $designFunctions.teamMember)) {
            var obj = Object.create($designFunctions.teamMember.prototype);
            return $designFunctions.teamMember.apply(obj, arguments);
        };

        var $e1 = __cr.div('', 'listItem', '', ''),
        $e2 = __cr.div('', 'face', '', ''),
        $e3 = __cr.img('', 'http://demo.graygrids.com/themes/plain-bs/assets/img/team/img1.jpg'),
        $e4 = __cr.div('', 'listInfo', '', ''),
        $e5 = __cr.h(item1, '3', '').attr('cpt', true),
        $e6 = __cr.p(item2, 'position').attr('cpt', true),
        $e7 = __cr.group.social(); 
        $e18 = __cr.p(item3, 'desc').attr('cpt', true);
        $e1.append($e2).append($e4);
        $e2.append($e3);
        $e4.append($e5).append($e6).append($e7).append($e18); ;

        var details = {
            section: {
                id: 'listBlock2'
            },
            goTo: {
                className: 'listItem'
            }
        }
        $e1.data('details', details);
         
        return $e1;
    }, 
    teamMember2: function (item1, item2, item3) {

        if (!(this instanceof $designFunctions.teamMember2)) {
            var obj = Object.create($designFunctions.teamMember2.prototype);
            return $designFunctions.teamMember2.apply(obj, arguments);
        };

        var $divAll = __cr.div('', 'tmAll'),
            $divL = __cr.div('', 'tmLeft'),
            $divR = __cr.div('', 'tmRight');

        var $e1 = __cr.div('', 'listItem', '', ''),
        $e2 = __cr.div('', 'face', '', ''),
        $e3 = __cr.img('', 'http://demo.graygrids.com/themes/plain-bs/assets/img/team/img1.jpg'),

        $e4 = __cr.div('', 'listInfo', '', ''),
        $e5 = __cr.h(item1, '3', '').attr('cpt', true),
        $e6 = __cr.p(item2, 'position').attr('cpt', true),
        $e7 = __cr.group.social();
        $e8 = __cr.p(item3, 'desc').attr('cpt', true);
         
        $e1.append($e2);
        $e2.append($e3);

        $e4.append($e5).append($e6).append($e7).append($e8);;

        $divL.append($e1);
        $divR.append($e4);
        $divAll.append($divL).append($divR);

        var details = {
            section: {
                id: 'listBlock3'
            },
            goTo: {
                className: 'listItem'
            }
        }
        $divAll.data('details', details);


        return $divAll;
    },
    house: function (picTL, picTR, picBR, picBRs, title, address, detail1, detail2, detail3, detail4, bottomLeft, bottomRight) {
        picTL = 'picTL';
        picTR = 'picTR';
        picBL = 'picBL',
        picBLs = 'picBLs',
        title = 'Title';
        address = 'Address';
        detail1 = 'detail1',
        detail2 = 'detail2',
        detail3 = 'detail3',
        detail4 = 'detail4',
        bottomLeft = 'bottomLeft',
        bottomRight = 'bottomRight';

        var $sa = __cr.spanAbs(picTL, '', null, false, 40, 40);

        var $e1 = __cr.div('','property-main','',''),
        $e2 = __cr.div('','property-wrap','',''),
        $e3 = __cr.div('','property-item','',''),
        $e4 = __cr.figure('item-thumb'),
        $e5 = __cr.a('property.html','','hover-effect',''),
        $e6 = __cr.img('', 'https://uideck.com/demos/estatex/assets/img/property/house-1.jpg'),
        $e7 = __cr.span(picTL, 'label-featured', '', '').attr('cpt', true),
        $e8 = __cr.div('','label-inner','',''),
        $e9 = __cr.span(picTR, 'label-status label', '', '').attr('cpt', true),
        $e10 = __cr.div('', 'houseprice', '', ''),
        $e11 = __cr.span(picBL, 'item-price', '', '').attr('cpt', true),
        $e12 = __cr.span(picBLs, 'item-sub-price', '', '').attr('cpt', true),
        $e13 = __cr.ul('actions',''),
        $e14 = __cr.li('','',''),
        $e15 = __cr.span('','add-fav','',''),
        $e16 = __cr.i('fa fa-heart','','',''),
        $e17 = __cr.div('','item-body','',''),
        $e18 = __cr.h('', '3', 'property-title'),
        $e19 = __cr.a('property.html', '', '', title).attr('cpt', true),
        $e20 = __cr.div(address, 'adderess','','').attr('cpt', true),
        $e21 = __cr.i('fa fa-map-marker', '', '', ''),
        $e22 = __cr.div('','info','',''),
        $e23 = __cr.p('',''),
        $e24 = __cr.span(detail1, '', '', '').attr('cpt', true),
        $e25 = __cr.span(detail2, '', '', '').attr('cpt', true),
        $e26 = __cr.span(detail3, '', '', '').attr('cpt', true),
        $e27 = __cr.p(detail4, '').attr('cpt', true),
        $e28 = __cr.div('','item-foot date hide-on-list','',''),
        $e29 = __cr.div('','pull-left','',''),
        $e30 = __cr.p('','prop-user-agent'),
        $e31 = __cr.i('fa fa-user', '', '', ''),
        $e32 = __cr.a('#', '', '', bottomLeft).attr('cpt', true),
        $e33 = __cr.div('','pull-right','',''),
        $e34 = __cr.p(bottomRight, 'prop-date').attr('cpt', true),
        $e35 = __cr.i('fa fa-calendar', '', '', '');
        $e1.append($e2).append($e28);
        $e2.append($e3);
        $e3.append($e4).append($e17);
        $e4.append($e5).append($e7).append($sa).append($e8).append($e10).append($e13);
        $e5.append($e6);
        $e8.append($e9);
        $e10.append($e11).append($e12);
        $e13.append($e14);
        $e14.append($e15);
        $e15.append($e16);
        $e17.append($e18).append($e20).append($e22);
        $e18.append($e19);
        $e20.prepend($e21);
        $e22.append($e23).append($e27);
        $e23.append($e24).append($e25).append($e26);
        $e28.append($e29).append($e33);
        $e29.append($e30);
        $e30.append($e31).append($e32);
        $e33.append($e34);
        $e34.prepend($e35);

        return $e1;
    }, 
    chartWithHeader: function (item1, item2, item3, item4, item5, item6, item7) {

        var createLI = function (b, p) {
            var $li = __cr.li('', '', ''),
                $h = __cr.h('', '4', ''),
                $b = __cr.b(b).attr('cpt', true),
                $p = __cr.p(p, 'text-muted m-b-0').attr('cpt', true);
            $h.append($b);
            $li.append($h).append($p);
            return $li;
        }

        var $e1 = __cr.div('', 'panel panel-primary', '', ''),
        $e2 = __cr.div('', 'panel-body', '', ''),
        $e3 = __cr.h(item1, '4', 'm-t-0').attr('cpt', true),
        $e4 = __cr.ul('list-inline widget-chart m-t-20 text-center', ''),

        $e5 = createLI(item2, item3);
        $e6 = createLI(item4, item5);
        $e7 = createLI(item6, item7);
           
        $e17 = __cr.div('', '', '', '');

        $e1.append($e2);
        $e2.append($e3).append($e4).append($e17);
        $e4.append($e5).append($e6).append($e7);

        var details = {
            section: {
                id: 'cwh',
                css: 'cwh'
            }
        }
        $e1.data('details', details);

        return $e1;
    }
}
