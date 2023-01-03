var JLJS_domModuleControl = {
    JLJS_domIntl_aiportSelectControl : {},
    JLJS_domIntl_datetimeSelectControl : {},
    JLJS_domIntl_passengerControl : {},
    JLJS_domIntl_selectControl : {},
    JLJS_domIntl_discountControl : {},
    WRAP : "#JS_domIntl_reservSelectorWrap",
    CK_HISTORY : 'domTopHistory',
    CK_CITY_SELECT : "domIntlCitySelect",
    action_dom_pc : 'https://www121.jal.co.jp/JmbWeb/JR/Dispatcher_ja.do',
    action_dom_sp : 'https://sp5971.jal.co.jp/JmbSp/JR/Dispatcher_ja.do',
    action_domNew : 'https://booking.jal.co.jp/jl/dom-bkg/upsell',
    action_inter_pc : '',
    action_inter_sp : '',
    NOT_CLASS_SELECTED : '選択してください',
    submitData : {
        //JS_enc: '',
        //JS_enct: '2',
        //JS_site: 'J019J019',
        JS_language: 'JP',
        JS_countrySite: '',
        //JS_deviceType: 'DESKTOP',
        //JS_flowMode: 'REVENUE',
        JS_pattern: 'roundtrip',
        JS_departureDate : '',
        JS_departureYear : '',
        JS_departureMonth : '',
        JS_departureDay : '',
        JS_departureDatetime : '00',
        JS_departureTime : '00002359',
        JS_departureArea: '',
        JS_departureLocation: '',
        JS_departureCityName: '',
        JS_departureAirportName: '',
        JS_departureCountryCode: '',
        JS_departureDomInter: '',
        JS_arrivalArea: '',
        JS_arrivalLocation: '',
        JS_arrivalCityName: '',
        JS_arrivalAirportName: '',
        JS_arrivalCountryCode: '',
        JS_arrivalDomInter: '',
        JS_departureDate2 : '',
        JS_departureYear2 : '',
        JS_departureMonth2 : '',
        JS_departureDay2 : '',
        JS_departureDatetime2 : '00',
        JS_departureTime2 : '00002359',
        JS_departureArea2: '',
        JS_departureLocation2: '',
        JS_arrivalArea2: '',
        JS_arrivalLocation2: '',
        JS_cff: 'all',
        JS_discount: 'NONE',
        JS_nbAdt: '1',
        JS_nbYadt: '0',
        JS_nbChd: '0',
        JS_nbInf: '0',
        //JS_searchCassetteID: '',
        JS_isFlexible: 'FALSE',
        JS_directNonStop: 'FALSE'
        //JS_simulateousUpgrade: 'FALSE'
    },

    defaultModuleData: {
        submitValuesList: {
            'dom' : {
                'oneway': {
                    'JS_pattern' : 'segmentType',
                    'JS_departureMonth' : 'departureMonth1',
                    'JS_departureDay' : 'departureDay1',
                    'JS_departureTime' : 'departureTime1',
                    'JS_departureLocation' : 'departureAirportCode1',
                    'JS_arrivalLocation' : 'arrivalAirportCode1',
                    'JS_cff' : 'class1',
                    'JS_nbAdt' : 'adult',
                    'JS_nbChd' : 'child',
                    'JS_nbInf' : 'infant'
                },
                'roundtrip': {
                    'JS_pattern' : 'segmentType',
                    'JS_departureMonth' : 'departureMonth1',
                    'JS_departureDay' : 'departureDay1',
                    'JS_departureTime' : 'departureTime1',
                    'JS_departureMonth2' : 'departureMonth2',
                    'JS_departureDay2' : 'departureDay2',
                    'JS_departureTime2' : 'departureTime2',
                    'JS_departureLocation' : 'departureAirportCode1',
                    'JS_arrivalLocation' : 'arrivalAirportCode1',
                    'JS_cff' : 'class1',
                    'JS_nbAdt' : 'adult',
                    'JS_nbChd' : 'child',
                    'JS_nbInf' : 'infant'
                }
            },
            'inter' : {
                'oneway': {
                    'JS_enc' : 'ENC',
                    //'JS_enct' : 'ENCT',
                    //'JS_site' : 'SITE',
                    'JS_language' : 'LANGUAGE',
                    'JS_countrySite' : 'COUNTRY_SITE',
                    'JS_deviceType' : 'DEVICE_TYPE',
                    //'JS_flowMode' : 'FLOW_MODE',
                    'JS_pattern' : 'PATTERN',
                    'JS_departureDate' : 'DEPARTURE_DATE_1',
                    'JS_departureLocation' : 'DEPARTURE_LOCATION_1',
                    'JS_departureArea' : 'DEPARTURE_AREA_1',
                    'JS_arrivalLocation' : 'ARRIVAL_LOCATION_1',
                    'JS_arrivalArea' : 'ARRIVAL_AREA_1',
                    'JS_cff' : 'CFF_1',
                    'JS_nbAdt' : 'NB_ADT',
                    'JS_nbYadt' : 'NB_YADT',
                    'JS_nbChd' : 'NB_CHD',
                    'JS_nbInf' : 'NB_INF',
                    //'JS_searchCassetteID' : 'SEARCH_CASSETTE_ID',
                    'JS_isFlexible' : 'IS_FLEXIBLE',
                    'JS_directNonStop' : 'DIRECT_NON_STOP',
                    'JS_simulateousUpgrade' : 'SIMULTANEOUS_UPGRADE'
                },
                'roundtrip': {
                    'JS_enc' : 'ENC',
                    //'JS_enct' : 'ENCT',
                    //'JS_site' : 'SITE',
                    'JS_language' : 'LANGUAGE',
                    'JS_countrySite' : 'COUNTRY_SITE',
                    'JS_deviceType' : 'DEVICE_TYPE',
                    //'JS_flowMode' : 'FLOW_MODE',
                    'JS_pattern' : 'PATTERN',
                    'JS_departureDate' : 'DEPARTURE_DATE_1',
                    'JS_departureArea' : 'DEPARTURE_AREA_1',
                    'JS_departureLocation' : 'DEPARTURE_LOCATION_1',
                    'JS_arrivalLocation' : 'ARRIVAL_LOCATION_1',
                    'JS_arrivalArea' : 'ARRIVAL_AREA_1',
                    'JS_cff' : 'CFF_1',
                    'JS_nbAdt' : 'NB_ADT',
                    'JS_nbYadt' : 'NB_YADT',
                    'JS_nbChd' : 'NB_CHD',
                    'JS_nbInf' : 'NB_INF',
                    //'JS_searchCassetteID' : 'SEARCH_CASSETTE_ID',
                    'JS_isFlexible' : 'IS_FLEXIBLE',
                    'JS_directNonStop' : 'DIRECT_NON_STOP',
                    'JS_simulateousUpgrade' : 'SIMULTANEOUS_UPGRADE',
                    'JS_departureDate2' : 'DEPARTURE_DATE_2',
                    'JS_departureArea2' : 'DEPARTURE_AREA_2',
                    'JS_departureLocation2' : 'DEPARTURE_LOCATION_2',
                    'JS_arrivalArea2' : 'ARRIVAL_AREA_2',
                    'JS_arrivalLocation2' : 'ARRIVAL_LOCATION_2'
                }
            }
        },
        saveCookieList: ['JS_pattern', 'JS_cff', 'JS_nbAdt', 'JS_nbYadt', 'JS_nbChd', 'JS_nbInf', 'JS_departureYear', 'JS_departureMonth', 'JS_departureDay', 'JS_departureArea', 'JS_departureLocation', 'JS_departureYear2', 'JS_departureMonth2', 'JS_departureDay2', 'JS_arrivalArea', 'JS_arrivalLocation','JS_isFlexible','JS_directNonStop'],
        COUNTRY_SITE: '',
        cleanDelayMS: 500
    },

    ACCESSIBLE_GUIDE_MSG : {
        SUGGEST_USAGE : '上下キーで候補を選択、エンターキーで決定してください。エスケープキーでキャンセルします。'
    },
    UNAVAILABLE_DEP_COUNTRY_LIST : [
        //'XXX'
    ],
    DOM_SPECIFIC_INFO : {
        ONEDAY_PROMO : '<dl class="promotionLinksWrap dis-hide"><dt class="promotionLinks_head a11y-promotionLinks_head">おトク<br>情報</dt><dd class="promotionLinks_body"><ul class="promotionLinks"><li><a href="/jp/ja/domtour/goto/dp_daytrip/?121=35171026ZZZZZZZZ0100000001ZZZZZZZZ003794" class="txtLink">日帰りプランなら Go To トラベルキャンペーンがおトク！お申し込みはこちらから</a></li></ul></dd></dl>'
    },

    CLASS_SET:{
        'dom':[
            {
                id : 'JS_domIntl_LB-class-all-dom',
                label : 'すべて',
                val : 'all',
                checked : 'checked'
            },
            {
                id : 'JS_domIntl_LB-class-normal',
                label : '普通席',
                val : 'normal',
                checked : ''
            },
            {
                id : 'JS_domIntl_LB-class-classj',
                label : 'クラス J',
                val : 'classJ',
                checked : ''
            },
            {
                id : 'JS_domIntl_LB-class-first',
                label : 'ファーストクラス',
                val : 'firstClass',
                checked : ''
            }
        ],
        'domNew':[
            {
                id : 'JS_domIntl_LB-class-economy-classj',
                label : '普通席＋クラス J',
                val : 'ecoBusiness',
                checked : 'checked'
            },
            {
                id : 'JS_domIntl_LB-class-normal',
                label : '普通席',
                val : 'eco',
                checked : ''
            },
            {
                id : 'JS_domIntl_LB-class-classj',
                label : 'クラス J',
                val : 'business',
                checked : ''
            },
            {
                id : 'JS_domIntl_LB-class-first',
                label : 'ファーストクラス',
                val : 'first',
                checked : ''
            }
        ],
        'int':[
            {
                id : 'JS_domIntl_LB-class-economy',
                label : 'エコノミークラス',
                val : '1YE',
                checked : 'checked',
                upgrade : false
            },
            {
                id : 'JS_domIntl_LB-class-upgrade',
                label : 'アップグレード特典対象',
                val : '1UE',
                checked : '',
                upgrade : true
            },
            {
                id : 'JS_domIntl_LB-class-premium-economy',
                label : 'プレミアムエコノミークラス',
                val : '1WE',
                checked : '',
                upgrade : false
            },
            {
                id : 'JS_domIntl_LB-class-first-business',
                label : 'ファースト/ビジネスクラス',
                val : '1JE',
                checked : '',
                upgrade : false
            }
        ]
    },

    AIRPORT_LIST_TAB_CHANGE_GTM_PARAM:{
        FIRST:'[共通 F&S]モジュール',
        SECOND:{
            DEPARTURE:'出発空港',
            ARRIVAL:'到着空港'
        },
        THIRD:{
            ENTRANCE:{
                DOM:'日本の空港リスト',
                INTER:'海外の空港リスト'
            },
            RADIO_TAB:{
                DOM:'国内切替',
                INTER:'国際切替'
            }
        }
    },

    DISCOUNT_SET: [
        {
            id : 'JS_domIntl_LB-discount-none',
            label : '指定なし',
            val : 'NONE'
        },
        {
            id : 'JS_domIntl_LB-discount-kip',
            label : 'JALカード割引',
            val : 'JCF'
        },
        {
            id : 'JS_domIntl_LB-discount-sh',
            label : '株主割引',
            val : 'SHF'
        },
        {
            id : 'JS_domIntl_LB-discount-dis',
            label : '障がい者割引',
            val : 'DDF'
        },
        {
            id: 'JS_domIntl_LB-discount-cag',
            label: '介護帰省割引',
            val: 'CGF'
        },
        {
            id : 'JS_domIntl_LB-discount-isl',
            label : '離島割引',
            val : 'ILF'
        }
    ],

    isMem: false,
    $doc : null,
    $body: null,
    $selectNum: null,
    $dispSearchComponent: null,
    $moduleClose: null,
    $JS_domIntl_dataSearchType: null,
    $airLblInrWrapper : null,
    $depLbAir: null,
    $depValAir: null,
    $arrLBAir: null,
    $arrValAir: null,
    $depDate: null,
    $arrDate: null,
    $seatCls: null,
    $depDatetime: null,
    $arrDatetime: null,
    $tmplWrap: null,
    $airportTabListModal: null,
    $submitBtn: null,
    $dialogTitleMarket : null,
    $flyingInputLayer01 : null,
    $flyingInputLayer02 : null,
    $domAirportList : null,
    $interAirportList : null,
    $interAreaSelectTablist : null,
    $selectDomInterList : null,
    $domAirChgBtn: null,
    $domInterAirportListTabBase: null,
    $domInterAirportListCloseBtn: null,
    $domInterAirportListBackBtn: null,
    $domAirportListTab: null,
    $interAirportListTab: null,
    $suggestArea: null,
    $areaSelectTtlSP: null,
    $areaSelectInputSP: null,
    $discountTypeDiv: null,
    $discountType: null,
    $JS_calendarGuidBtn: null,
    $JS_calenderUnit: null,
    $JS_calendarNotes: null,
    $JS_calendarWrap: null,
    domInter:'dom',
    isYouth: false,
    initVal: {},
    currentOpenModal: '',
    lastFocusedElm: '',
    suggestSeachKeyword: '',
    modalOpenOffsetY: null,
    modalArrowPos: {normal: {'background-position': '208px 0'},oneway: {'background-position': '179px 0'}},
    errorElmMap : {},

    CLS_SUGGEST_SELECT: 'JS_suggestSelect',
    switchDate: new Date(2023, 3, 12),
    beforeDepDate: null,

    setup : function(){
        this.init();
        this.setupBefore();
        this.setupEvent();
        this.createAirportOverlay();
        this.JLJS_domIntl_aiportSelectControl.setup(this.CK_HISTORY);
        this.judgeDomInter(true, 'DEFAULT');
        var $dataSearchType = $('#JS_domIntl_dataSearchType');
        $dataSearchType.find('.check-select').addClass('dis-hide');
        $dataSearchType.find('.aco-inter-option').addClass('dis-hide');
        $dataSearchType.find('.form-alert').addClass('dis-hide');
        $dataSearchType.find('.JS_interOnly').addClass('dis-hide');
        $('#JS_domIntl_packagePassenger').find('.JS_interOnly').addClass('dis-hide');
        this.setupContent();
        this.setupView();
        this.setupAfter();
        this.lowFareControl.setup(this);
    },

    setupAfter : function(){
    },

    init : function(initVal){
        this.JLJS_domIntl_aiportSelectControl = this.copyObject(JLJS_aiportSelectControl);
        this.JLJS_domIntl_aiportSelectControl.suggestID = this.WRAP;
        this.JLJS_domIntl_aiportSelectControl.isDomInter = true;
        this.JLJS_domIntl_aiportSelectControl.selectAreaData = {dom : {}, inter : {}};

        this.JLJS_domIntl_datetimeSelectControl = this.copyObject(JLJS_selectControl);
        this.JLJS_domIntl_datetimeSelectControl.JS_ID_selectColumn = '#JS_domIntl_selectDateTimeColumn';
        this.JLJS_domIntl_datetimeSelectControl.JS_name = 'JS_domIntl_selectDateTime';

        this.JLJS_domIntl_passengerControl = this.copyObject(JLJS_passengerControl);
        this.JLJS_domIntl_passengerControl.JS_ID_passengerNum = '#JS_domIntl_passengerNum';
        this.JLJS_domIntl_passengerControl.JS_numPeople = 'JS_domIntl_numPassenger';

        this.JLJS_domIntl_selectControl = this.copyObject(JLJS_selectControl);
        this.JLJS_domIntl_selectControl.JS_ID_selectColumn = '#JS_domIntl_selectColumn';
        this.JLJS_domIntl_selectControl.JS_name = 'JS_domIntl_selectClass';

        this.JLJS_domIntl_discountControl = this.copyObject(JLJS_selectControl);
        this.JLJS_domIntl_discountControl.JS_ID_selectColumn = '#JS_domIntl_discountTypeColumn';
        this.JLJS_domIntl_discountControl.JS_name = 'JS_domIntl_discountType';

        this.$doc = $(document);
        this.$body = $('body');
        this.$tmplWrap = $(this.WRAP);
        this.airportTablistModal = $('#JS_domIntlAirportTablistMdl');
        this.$module = $('#JS_domIntl_intTicketModule');
        this.$dispSearchComponent = $('#JS_domIntl_dispSearchComponent');
        this.$moduleClose = $('#JS_moduleClose,#JS_moduleOverlay');
        this.$JS_domIntl_dataSearchType = $('#JS_domIntl_dataSearchType');
        this.$airLblInrWrapper = $('#JS_domIntl_domLbSelectAirInrWrapper');
        this.$depLbAir = $('#JS_domIntl_domLbDepAir');
        this.$depValAir = $('#JS_domIntl_departureAirport');
        this.$depValAirSP = $('#JS_domIntl_departureAirportSP');
        this.$depValAirSpLabel = $('#JS_domIntl_departureAirport_sp_label');
        this.$arrLBAir = $('#JS_domIntl_domLbArrAir');
        this.$arrValAir = $('#JS_domIntl_arrivalAirport');
        this.$arrValAirSP = $('#JS_domIntl_arrivalAirportSP');
        this.$arrValAirSpLabel = $('#JS_domIntl_arrivalAirport_sp_label');
        this.$depDate = $('#JS_domIntl_domLbDepDate');
        this.$arrDate = $('#JS_domIntl_domLbArrDate');
        this.$seatCls = $('#JS_domIntl_domLbSeatCls');
        this.$discountTypeDiv = $('#JS_domIntl_domLbDiscountTypeDiv');
        this.$discountType = $('#JS_domIntl_domLbDiscountType');
        this.$depDatetime = $('#JS_domIntl_domLbDepDatetime');
        this.$arrDatetime = $('#JS_domIntl_domLbArrDatetime');
        this.$selectNum = $('#JS_domIntl_domLbSelectNum');
        this.$selectConfirmButton = $('#JS_domIntl_selectConfirmButton');
        this.$submitBtn = $('#JS_domIntl_submitBtn');
        this.$dialogTitleMarket = $('#JS_domIntl_dialogTitleMarket');
        this.$overlay = $('#JS_overlay');
        this.$modalClose = $('#JS_domIntl_searchComponent').find('.JS_jalSearchModalClose');
        this.defaultModuleData.COUNTRY_SITE = JLJS_airportControl.getMarketFromDomain(window.location.hostname);
        this.isMem = JLJS_LoginStatus.isLogin();

        this.$suggestArea = this.$tmplWrap.find('[data-content="JS-suggest"]');
        this.$areaSelectTtlSP = $('#JS_domIntl_areaSelectTtlSP');
        this.$areaSelectInputSP = $('#JS_domIntl_areaSelectInputSP');

        this.$flyingInputLayer01 = $('#JS_flyingInputLayer01');
        this.$flyingInputLayer02 = $('#JS_flyingInputLayer02');
        this.$domAirportList = $('#JS_domAirportList');
        this.$interAirportList = $('#JS_interAirportList');
        this.$interAreaSelectTablist = $('#JS_interAreaSelectTabList');
        this.$selectDomInterList = $('#JS_selectDomInterList');
        this.$domAirChgBtn = $('#JS_domAirChgBtn');
        this.$domInterAirportListTabBase = $('#JS_domInterAirportListTabBase');
        this.$dominterAirportListCloseBtn = $('#JS_domInterAirportListCloseBtn');
        this.$domInterAirportListBackBtn = $('#JS_domInterAirportListBackBtn');
        this.$domAirportListTab = $('#JS_domAirportListTab');
        this.$interAirportListTab = $('#JS_interAirportListTab');
        this.$interTransitPromo = $('#JS_interTransitPromo');
        this.$domPromo = $('#JS_domPromo');
        this.$domDayTripPromo = $('#JS_domDayTripPromo');
        this.$JS_domInterOnewayCheck = $('#JS_domIntl_onewayCheck').find('input');
        this.beforeDepDate = this.getBoardingDate('departure');
        this.$JS_calenderUnit = $('#JS_dispCalendar').find('.calender-unit-wrap');
        this.$JS_calendarGuidBtn = $('#JS_calendarGuidButton');
        this.$JS_calendarNotes = this.$JS_calenderUnit.find('#JS_calendarNotes');
        this.$JS_calendarWrap = $("#JS_dispCalendar").find('.calendar-table-wrap');

        this.errorElmMap = {
            $all : $('.JS_errorTextElm'),
            $noDepSelect : $('.JS_depCityError'),
            $noArrSelect : $('.JS_arrCityError'),
            $sameCitySelect : $('.JS_sameCityError'),
            $noDateSelectLbl : $('#JS_dateLabelError'),
            $noDateSelectMdl : $('#JS_dateModalError'),
            $noClassSelectLbl : $('#JS_classLabelError'),
            $noClassSelectMdl : $('#JS_classModalError'),
            $noAdult : $('#JS_noAdultCountError'),
            $tooManyPax : $('#JS_tooManyPassengerError'),
            $childrenOver : $('#JS_childrenOverError'),
            $enfantOver : $('#JS_enfantOverError'),
            $tooManyPaxDom : $('#JS_tooManyPassengerErrorDom'),
            $maxEnfantOver : $('#JS_maxEnfantOverError'),
            $minPassenger : $('#JS_minPassengerError'),
            $maintenance : $('#JS_maintenanceError'),
            $segNotInService : $('#JS_segNotInServiceError'),
            $countrySuspended : $('#JS_countrySuspendedError'),
            $noMultiCity : $('#JS_noMultiCityError'),
            $cgfDdfChild : $('#JS_discountCgfDdfChildError'),
            $jcfChild : $('#JS_discountJcfChildError'),
            $switchDay : $('#JS_switchDayError')
        };
    },

    setupView : function() {
        this.resetInputData();
        var market = this.setInitVal(false);
        if(JLJS_CookieMgr.getMulti('domModuleTopCookie')){
            this.judgeDomInter(false, market);
        }else{
            if(this.submitData['JS_departureDomInter']){
                this.JLJS_domIntl_aiportSelectControl.setupSelectArea(false, market, this.submitData['JS_departureDomInter']);
            }else{
                this.JLJS_domIntl_aiportSelectControl.setupSelectArea(false, market, 'dom');
            }
        }
        this.setInitVal(true);
        this.dispPassenger();
        this.changeDispClass();
        this.dispInterClass();
    },

    resetInputData : function(){
        this.$JS_domIntl_dataSearchType
            .find('input, checkbox')
            .not(":button")
            .val("")
            .prop("checked", false);
    },

    closeSearchComponent : function() {
        if(this.$JS_domIntl_dataSearchType.attr('data-search-type') === 'multicity') {
            $('#JS_domIntl_roundTrip button').click();
        }
    },

    copyObject : function(originalObj){
        var copyObj = {};
        for (var key in originalObj) {
            copyObj[key] = originalObj[key];
        }
        return copyObj;
    },

    setupBefore : function(){
    },

    getHistoryCookie : function(){
        var history = {};
        var cookie = JLJS_CookieMgr.getMulti(this.CK_HISTORY);
        if(cookie){
            for(var key in cookie){
                history[key] = JSON.parse(cookie[key]);
            }
        }
        return history;
    },

    getModalOffset: function($elm, isPC, diffTop, diffLeft){
        if(!diffTop){diffTop = 0;}
        if(!diffLeft){diffLeft = 0;}
        if(isPC) diffTop += 80;
        else diffTop += 130;
        return {top: $elm.offset().top+diffTop, left: $elm.offset().left+diffLeft};
    },

    setInitVal: function(doneAir){
        var market = 'DEFAULT';
        var cookie = JLJS_CookieMgr.getMulti('domModuleTopCookie');
        var ckTab = JLJS_CookieMgr.getMulti(this.CK_CITY_SELECT);
        var isOnewayType = function(type){
            return type === 'JS_domIntl_oneWay' ? true : false;
        };
        if(cookie && !doneAir){
            this.submitData = cookie;
            this.submitData['JS_language'] = 'JP';
            if(!ckTab) {
                var patternId = this.submitData['JS_pattern'] === 'oneway' ? '#JS_domIntl_oneWay' : '#JS_domIntl_roundTrip';
                $(patternId).find('button').click();
                var isCheck = this.submitData['JS_pattern'] === 'oneway' ? true : false;
                this.$JS_domInterOnewayCheck.prop('checked', isCheck);
            } else {
                $('#'+ckTab.city).find('button').click();
                this.$JS_domInterOnewayCheck.prop('checked', isOnewayType(ckTab.city));
            }


            market = this.setInitValAir(true);
        }else if(cookie && doneAir){
            this.submitData = cookie;
            this.submitData['JS_language'] = 'JP';
            var depYear = this.submitData['JS_departureYear'];
            var depMonth = this.submitData['JS_departureMonth'];
            var depDay = this.submitData['JS_departureDay'];
            if(depYear && depMonth && depDay){
                this.beforeDepDate = new Date(depYear, depMonth - 1, depDay);
            }
            this.setInitValCal();
            this.setInitValMem();
            this.setInitValClass();
            this.setInitValDiscountType();
            this.setInitValDatetime();
            if(this.submitData['JS_isFlexible'] === 'TRUE') $('#JS_domIntl_lbCalendarSearchCheck').find('input').prop('checked', true);
            if(this.submitData['JS_directNonStop'] === 'TRUE'){
                $('#JS_domIntl_nonStopCheck').css('display', '');
                $('#JS_domIntl_nonStopCheck').find('input').prop('checked', true);
            }
        }else if(!cookie && doneAir){
            if(ckTab) {
                $('#'+ckTab.city).find('button').click();
                this.$JS_domInterOnewayCheck.prop('checked', isOnewayType(ckTab.city));
            }
        }else if(!doneAir){
            market = this.setInitValAir(false);
        }
        return market;
    },

    setInitValAir: function(isCookie){
        if(isCookie){
            var depThreeLetter = this.checkThreeLetter(this.submitData['JS_departureLocation'],this.submitData['JS_departureAirportName'],false);
            var arrThreeLetter = this.checkThreeLetter(this.submitData['JS_arrivalLocation'],this.submitData['JS_arrivalAirportName'],false);
            $(this.$depValAir).val(this.submitData['JS_departureCityName'] + '(' + depThreeLetter + ')');
            $(this.$depValAirSpLabel).html(this.submitData['JS_departureCityName'] + '(' + depThreeLetter + ')');
            $(this.$depValAir).attr('disp', this.submitData['JS_departureCityName'] + '(' + depThreeLetter + ')');
            $(this.$depValAir).attr('market', this.submitData['JS_countrySite']);
            $(this.$depValAir).attr('domInter', this.submitData['JS_departureDomInter']);
            $(this.$depValAir).attr('cityName', this.submitData['JS_departureCityName']);
            $(this.$depValAir).attr('cityCode', this.submitData['JS_departureLocation']);
            $(this.$depValAir).attr('airportName', this.submitData['JS_departureAirportName']);
            $(this.$depValAir).attr('countryCode', this.submitData['JS_departureCountryCode']);
            $(this.$depLbAir).find('.txt-placeholder').css('display', 'none');
            $(this.$arrValAir).val(this.submitData['JS_arrivalCityName'] + '(' + arrThreeLetter + ')');
            $(this.$arrValAirSpLabel).html(this.submitData['JS_arrivalCityName'] + '(' + arrThreeLetter + ')');
            $(this.$arrValAir).attr('disp', this.submitData['JS_arrivalCityName'] + '(' + arrThreeLetter+ ')');
            var arrData = JLJS_suggestControl.searchAirport(arrThreeLetter, {domAbroad: 'domestic'}, 'ja');
            var arrMarket = arrData[0][JLJS_suggestControl.market];
            if(!arrMarket) arrMarket = 'DEFAULT';
            $(this.$arrValAir).attr('market', arrMarket);
            $(this.$arrValAir).attr('domInter', this.submitData['JS_arrivalDomInter']);
            $(this.$arrValAir).attr('cityName', this.submitData['JS_arrivalCityName']);
            $(this.$arrValAir).attr('cityCode', this.submitData['JS_arrivalLocation']);
            $(this.$arrValAir).attr('airportName', this.submitData['JS_arrivalAirportName']);
            $(this.$arrValAir).attr('countryCode', this.submitData['JS_arrivalCountryCode']);
            $(this.$arrLBAir).find('.txt-placeholder').css('display', 'none');
            var market = this.submitData['JS_countrySite'];
            if(!market) market = 'DEFAULT';
            return market;

        }else{
            var zipAir = JLJS_CookieMgr.getMulti('zipAirport');
            var depVal;
            var history = this.getHistoryCookie();

            if(history && history.dep) {
                depVal = JLJS_suggestControl.searchAirport(history.dep[0][0], {domAbroad: 'domestic'}, 'ja');
            } else if(zipAir){
                depVal = JLJS_suggestControl.searchAirport(zipAir, {domAbroad: 'domestic'}, 'ja');
            }

            if(!depVal) return 'DEFAULT';
            $(this.$depValAir).val(depVal[0][JLJS_suggestControl.searchCityName][JLJS_suggestControl.disp] + '(' + depVal[0][JLJS_suggestControl.searchCityCode] + ')');
            $(this.$depValAirSpLabel).html(depVal[0][JLJS_suggestControl.searchCityName][JLJS_suggestControl.disp] + '(' + depVal[0][JLJS_suggestControl.searchCityCode] + ')');
            $(this.$depValAir).attr('disp', depVal[0][JLJS_suggestControl.searchCityName][JLJS_suggestControl.disp] + '(' + depVal[0][JLJS_suggestControl.searchCityCode] + ')');
            $(this.$depValAir).attr('market', depVal[0][JLJS_suggestControl.market]);
            $(this.$depValAir).attr('domInter', depVal[0][JLJS_suggestControl.domInter]);
            $(this.$depValAir).attr('cityName', depVal[0][JLJS_suggestControl.searchCityName][JLJS_suggestControl.disp]);
            $(this.$depValAir).attr('cityCode', depVal[0][JLJS_suggestControl.searchCityCode]);
            $(this.$depValAir).attr('airportName', depVal[0][JLJS_suggestControl.searchAirportName][JLJS_suggestControl.disp]);
            $(this.$depValAir).attr('countryCode', depVal[0][JLJS_suggestControl.searchCountryCode]);
            this.submitData['JS_departureLocation'] = depVal[0][JLJS_suggestControl.searchCityCode];
            this.submitData['JS_arrivalLocation2'] = depVal[0][JLJS_suggestControl.searchCityCode];
            this.submitData['JS_departureCityName'] = depVal[0][JLJS_suggestControl.searchCityName][JLJS_suggestControl.disp];
            this.submitData['JS_departureAirportName'] = depVal[0][JLJS_suggestControl.searchAirportName][JLJS_suggestControl.disp];
            this.submitData['JS_departureCountryCode'] = depVal[0][JLJS_suggestControl.searchCountryCode];
            this.submitData['JS_departureDomInter'] = depVal[0][JLJS_suggestControl.domInter];
            this.submitData['JS_countrySite'] = depVal[0][JLJS_suggestControl.market];
            var market = depVal[0][JLJS_suggestControl.market];
            if(!market) market = 'DEFAULT';
            var selections = 'whole_exJPN_01';
            var areaKey = JLJS_airportControl.getSSAreaKeyFromCityCd(selections, depVal[0][JLJS_suggestControl.searchCityCode]);
            this.submitData['JS_departureArea'] = areaKey;
            this.submitData['JS_arrivalArea2'] = areaKey;
            $(this.$depLbAir).find('.txt-placeholder').css('display', 'none');
            return market;
        }
    },

    setInitValCal : function(){
        var depDate = new Date(this.submitData['JS_departureYear'], this.submitData['JS_departureMonth'] -1, this.submitData['JS_departureDay']);
        var arrDate = '';
        if(this.submitData['JS_departureYear2']){
            arrDate = new Date(this.submitData['JS_departureYear2'], this.submitData['JS_departureMonth2'] -1, this.submitData['JS_departureDay2']);
        }
        this.createDateElm(depDate, arrDate);
        this.setSpecificInfo();

        $('#JS_dispCalendar').css('display', 'none');
        if($('#' + this.submitData['JS_departureMonth'] + this.submitData['JS_departureDay']).length){
            $('#' + this.submitData['JS_departureMonth'] + this.submitData['JS_departureDay']).click();
        }
        if(this.submitData['JS_departureMonth2'] && $('#' + this.submitData['JS_departureMonth2'] + this.submitData['JS_departureDay2']).length){
            $('#' + this.submitData['JS_departureMonth2'] + this.submitData['JS_departureDay2']).click();
        }
    },

    setInitValClass : function(){
        var _this = this;
        if(_this.isOverSwitchDate(_this.beforeDepDate) && _this.domInter === 'dom'){
            var classInfo = _this.CLASS_SET.domNew;
            _this.JLJS_domIntl_selectControl.setup(classInfo);
        }
        var $li = $(this.JLJS_domIntl_selectControl.JS_ID_selectColumn).find('li');
        $li.each(function(index, elm){
            var $label = $(elm).find('label');
            if(_this.submitData['JS_cff'] === $label.attr('data-val')){
                $(elm).find('input').prop('checked', true);
                $(_this.$seatCls).find('span').text($label.text());
                return false;
            }
        });
    },

    setInitValDiscountType: function () {
        var _this = this;
        if(_this.isOverSwitchDate(_this.beforeDepDate) && _this.domInter === 'dom'){
            _this.$discountTypeDiv.removeClass('dis-hide');
        }

        var $li = $(this.JLJS_domIntl_discountControl.JS_ID_selectColumn).find('li');
        $li.each(function (index, elm){
            var $elm = $(elm);
            var $label = $elm.find('label');
            if(_this.submitData['JS_discount'] === $label.attr('data-val')){
                $elm.find('input').prop('checked', true);
                _this.$discountType.find('span').text($label.text());
                return;
            }
        });
    },

    setInitValDatetime : function(){
        var _this = this;
        var $li = $(this.JLJS_domIntl_datetimeSelectControl.JS_ID_selectColumn).find('li');
        $li.each(function(index, elm){
            var $label = $(elm).find('label');
            if(_this.submitData['JS_departureDatetime'] === $label.attr('data-val')){
                $(elm).find('input').prop('checked', true);
                $(_this.$depDatetime).find('span').text($label.text());
            }
            if(_this.submitData['JS_departureDatetime2'] === $label.attr('data-val')){
                $(elm).find('input').prop('checked', true);
                $(_this.$arrDatetime).find('span').text($label.text());
            }
        });
    },

    setInitValMem: function(){
        var _this = this;

        this.dispPassenger();

        var $li = $(this.JLJS_domIntl_passengerControl.JS_ID_passengerNum).find('li');
        var list = ['JS_nbAdt','JS_nbYadt','JS_nbChd','JS_nbInf'];
        if($li.length === 3) list = ['JS_nbAdt','JS_nbChd','JS_nbInf'];
        $li.each(function(index, elm){
            var value = _this.submitData[list[index]] -1;
            $(elm).find('input').val(value);
            $(elm).find('span').text(value);
            $(elm).find('[data-content="' + _this.JLJS_domIntl_passengerControl.JS_addPassenger + '"]').click();
        });
    },
    setupContent : function(){
        var datetimeInfo = [
            {
                id : 'JS_domIntl_lbTimeNon',
                label : '指定なし',
                val : '00',
                checked : 'checked'
            },
            {
                id : 'JS_domIntl_lbTime6',
                label : '6時〜',
                val : '06',
                checked : ''
            },
            {
                id : 'JS_domIntl_lbTime10',
                label : '10時〜',
                val : '10',
                checked : ''
            },
            {
                id : 'JS_domIntl_lbTime15',
                label : '15時〜',
                val : '15',
                checked : ''
            },
            {
                id : 'JS_domIntl_lbTime22',
                label : '22時〜',
                val : '22',
                checked : ''
            }
        ];
        /*$(this.$seatCls).find('span').text(classLabel.label);
		this.submitData['JS_cff'] = classLabel.val;*/
        this.JLJS_domIntl_datetimeSelectControl.setup(datetimeInfo);
    },
    changeYouthCheck : function(){
        if($('#JS_domIntl_youthPassenger').css('display') === 'none') this.isYouth = false;
        else this.isYouth = true;
    },
    checkAreaCode: function(){
        this.submitData['JS_departureLocation'] = this.convertIntCityCode(this.submitData['JS_departureLocation']);
        $('#JS_domIntl_searchForm').find('input[name="DEPARTURE_LOCATION_1"]').val(this.submitData['JS_departureLocation']);
        this.submitData['JS_departureLocation2'] = this.convertIntCityCode(this.submitData['JS_departureLocation2']);
        $('#JS_domIntl_searchForm').find('input[name="DEPARTURE_LOCATION_2"]').val(this.submitData['JS_departureLocation2']);
        this.submitData['JS_arrivalLocation'] = this.convertIntCityCode(this.submitData['JS_arrivalLocation']);
        $('#JS_domIntl_searchForm').find('input[name="ARRIVAL_LOCATION_1"]').val(this.submitData['JS_arrivalLocation']);
        this.submitData['JS_arrivalLocation2'] = this.convertIntCityCode(this.submitData['JS_arrivalLocation2']);
        $('#JS_domIntl_searchForm').find('input[name="ARRIVAL_LOCATION_2"]').val(this.submitData['JS_arrivalLocation2']);
    },
    saveCookie : function(name, cookieList, originAirportHash){
        var cookieHash = this.copyObject(this.submitData);
        if(this.domInter === 'inter') {
            for(var key in originAirportHash) {
                cookieHash[key] = originAirportHash[key];
            }
        }
        JLJS_CookieMgr.setMultiCookie(name, cookieHash);
    },

    getSelectedAirports : function(hash) {
        var resultHash = {};
        var keyList = ['JS_departureLocation', 'JS_departureLocation2', 'JS_arrivalLocation', 'JS_arrivalLocation2'];
        for(var i=0; i<keyList.length; i++) {
            var val = keyList[i];
            if(val) {
                resultHash[val] = hash[val];
            }
        }
        return resultHash;
    },

    convertIntCityCode : function(code) {
        if('CTS' === code){
            code = 'SPK';
        }else if('NGY' === code){
            code = 'NGO';
        }
        return code;
    },

    createAirportOverlay : function() {
        var $airportOverlay = $('<div></div>', {
            class: '',
            id: 'JS_domIntl_AirSelOverlay',
            role: '',
            css: {
                display: 'none',
                background: 'rgba(255,255,255,0)',
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                'z-index': 9999
            },
            'aria-label': 'Close (Press escape to close)'});
        $('body').append($airportOverlay);
    },
    createSubmitParam : function(){
        var _this = this;
        var getOverDate = function(){
            var d = new Date();
            d.setHours(0,0,0,0);
            var mm = parseInt(_this.submitData['JS_departureMonth'], 10);
            var dd = parseInt(_this.submitData['JS_departureDay'], 10);
            var yy = (mm < (d.getMonth()+1))? d.getFullYear()+1 : d.getFullYear();
            var td = new Date(yy, mm-1, dd, 0, 0, 0);
            return Math.floor((td.getTime() - d.getTime())/(1000*60*60*24));
        };
        var depOver28Value = function(overDay){
            return (overDay >= 28)? 1 : 0;
        };
        var dep_AtoB_DaysValue = function(a,b){
            return (overDay >= a && overDay <= b)? 1 : 0;
        };
        var submitInputsList = this.defaultModuleData.submitValuesList[this.domInter][this.$JS_domIntl_dataSearchType.attr('data-search-type')];
        var $submitForm = $(document.forms.JS_domIntl_searchForm);
        $submitForm.empty();
        if(this.domInter === 'dom'){
            var overDay = getOverDate();
            if(JLJS.isPcSite()){
                $submitForm.append('<input type="hidden" value="https://www.5971.jal.co.jp/rsv/LFSSearchDispatch.do" name="memberBackUrl">' +
                    '<input type="hidden" value="1,2,5" name="memberPattern">' +
                    '<input type="hidden" value="https://www.5971.jal.co.jp/rsv/LFSSearchDispatch.do" name="guestBackUrl">' +
                    '<input type="hidden" value="5" name="guestPattern">' +
                    '<input type="hidden" value="2" name="searchType">' +
                    '<input type="hidden" value="' + depOver28Value(overDay) + '" name="rt_depOver28">' +
                    '<input type="hidden" value="' + dep_AtoB_DaysValue(10,27) + '" name="rt_dep10_27Days">' +
                    '<input type="hidden" value="' + dep_AtoB_DaysValue(7,9) + '" name="rt_dep7_9Days">' +
                    '<input type="hidden" value="' + overDay + '" name="rt_depPreDays">' +
                    '<input type="hidden" value="031" name="linkId" id="JS_linkId">');
            }else{
                $submitForm.append('<input type="hidden" value="https://sp5971.jal.co.jp/sp/ScheduleFlightInfo.do" name="memberBackUrl">' +
                    '<input type="hidden" value="5,22" name="memberPattern">' +
                    '<input type="hidden" value="https://sp5971.jal.co.jp/sp/ScheduleFlightInfo.do" name="guestBackUrl">' +
                    '<input type="hidden" value="5" name="guestPattern">' +
                    '<input type="hidden" value="2" name="searchType">' +
                    '<input type="hidden" value="空席照会" name="method">' +
                    '<input type="hidden" value="TOPDAM" name="transitionStateID">' +
                    '<input type="hidden" value="' + depOver28Value(overDay) + '" name="rt_depOver28">' +
                    '<input type="hidden" value="' + dep_AtoB_DaysValue(10,27) + '" name="rt_dep10_27Days">' +
                    '<input type="hidden" value="' + dep_AtoB_DaysValue(7,9) + '" name="rt_dep7_9Days">' +
                    '<input type="hidden" value="' + overDay + '" name="rt_depPreDays">' +
                    '<input type="hidden" value="319" name="linkId" id="JS_linkId">');
            }
        }else{
            $submitForm.append('<input type="hidden" name="ENCT" value="2" class="JS_const">' +
                '<input type="hidden" name="SITE" value="J019J019" class="JS_const">' +
                '<input type="hidden" name="FLOW_MODE" value="REVENUE" class="JS_const">' +
                '<input type="hidden" name="SEARCH_CASSETTE_ID" value="" class="JS_const">');

            var $stgFrm = $(document.forms['fromStaging']);
            $submitForm.append($stgFrm.html());
            this.submitData['JS_enc'] = JLJS_CookieMgr.get('enc1A');
            if(!JLJS.isPcSite()){
                this.submitData['JS_deviceType'] = 'MOBILE';
            }else{
                this.submitData['JS_deviceType'] = 'DESKTOP';
            }
        }
        for(var key in submitInputsList){
            var value = this.submitData[key];
            if(key === 'JS_pattern'){
                if(value === 'oneway'){
                    if(this.domInter === 'dom') value = '1';
                    else value = '1B';
                }else{
                    if(this.domInter === 'dom') value = '2';
                    else value = '2B';
                }
            }
            $submitForm.append('<input type="hidden" id="' + submitInputsList[key] + '" name="' + submitInputsList[key] + '" value="' + value + '">');
        }
    },
    createNewSubmitParam: function (dt_sid, hv_sid) {
        var _this = this;
        var $submitForm = $(document.forms.JS_domIntl_searchForm);
        $submitForm.empty();
        var depAirportCode = _this.submitData['JS_departureLocation'];
        var depDate = _this.getBoardingDate('departure');
        var depDateStr = JLJS_dateUtil.formatDate(depDate, '-', true);
        var arrAirportCode = _this.submitData['JS_arrivalLocation'];
        var adult = _this.submitData['JS_nbAdt'];
        var child = _this.submitData['JS_nbChd'];
        var infant = _this.submitData['JS_nbInf'];
        var className = _this.submitData['JS_cff'];
        var discountType = _this.submitData['JS_discount'];

        if (_this.submitData['JS_pattern'] === 'oneway') {
            $submitForm.append(
                '<input type="hidden" value="OW" name="tripType">'
                + '<input type="hidden" value="' + depAirportCode + '" name="depAirportCode1">'
                + '<input type="hidden" value="' + arrAirportCode + '" name="arrAirportCode1">'
                + '<input type="hidden" value="' + depDateStr + '" name="depDate">'
                + '<input type="hidden" value="' + adult + '" name="adult">'
                + '<input type="hidden" value="' + child + '" name="child">'
                + '<input type="hidden" value="' + infant + '" name="infant">'
                + '<input type="hidden" value="' + className + '" name="class">'
                + '<input type="hidden" value="' + discountType + '" name="discountType">'
                + '<input type="hidden" value="02" name="linkId">'
                + '<input type="hidden" value="ja" name="langCd">'
                + '<input type="hidden" value="' + dt_sid + '" name="dt_sid">'
                + '<input type="hidden" value="' + hv_sid + '" name="hv_sid">');
        } else {
            var arrDate = _this.getBoardingDate('arrival');
            var arrDateStr = JLJS_dateUtil.formatDate(arrDate, '-', true);

            $submitForm.append(
                '<input type="hidden" value="RT" name="tripType">'
                + '<input type="hidden" value="' + depAirportCode + '" name="depAirportCode1">'
                + '<input type="hidden" value="' + arrAirportCode + '" name="arrAirportCode1">'
                + '<input type="hidden" value="' + depDateStr + '" name="depDate">'
                + '<input type="hidden" value="' + arrDateStr + '" name="returnDate">'
                + '<input type="hidden" value="' + adult + '" name="adult">'
                + '<input type="hidden" value="' + child + '" name="child">'
                + '<input type="hidden" value="' + infant + '" name="infant">'
                + '<input type="hidden" value="' + className + '" name="class">'
                + '<input type="hidden" value="' + discountType + '" name="discountType">'
                + '<input type="hidden" value="02" name="linkId">'
                + '<input type="hidden" value="ja" name="langCd">'
                + '<input type="hidden" value="' + dt_sid + '" name="dt_sid">'
                + '<input type="hidden" value="' + hv_sid + '" name="hv_sid">');
        }
    },
    openSearchComponent : function($lbAir, airKey, $this){
        var _this = this;
        if(JLJS.isPcSite()){
            var _delayCallback = function(){
                if($lbAir) {_this.clickInputAir($lbAir, airKey, $this);}
            };
            JLJS_moduleControl.openSearchComponent(_delayCallback);
        }else{
            if($lbAir) {
                JLJS_moduleControl.openSearchComponent();
                _this.clickInputAir($lbAir, airKey, $this);
            }
        }
    },

    openMessegeModalp: (function() {
        var _this = this;
        function closeMessegeBox() {
            //JLJS_domModuleControl.$dialogTitleMarket.fadeOut();
            JLJS_domModuleControl.closeModal();
        }
        return function(contentsData, cleanDelay, errorMsgFlg) {
            var $messegeDiff = new $.Deferred();
            var lang = contentsData.lang;
            var $ul = this.$dialogTitleMarket.find('ul');
            $ul.empty();
            if(errorMsgFlg){
                this.readAllErrorMessage();
                return false;
            }
            for(var i = 0; i < lang.length; i++){
                $ul.append(
                    '<li><a href="javascript:void(0)" data-value="' + lang[i] + '" class="button-primary JS_marketChangeSubmit">' + contentsData.langData[lang[i]] + '</a></li>'
                );
            }
            $ul.append('<li><a href="javascript:void(0)" id="JS_domIntl_intMessegeCancel" class="button-secondary">キャンセル</a></li>');

            var fadeTime = 400;
            var overlayTime = 300;
            if(!JLJS.isPcSite()){
                fadeTime = 0;
                overlayTime = 10;
            }
            this.$dialogTitleMarket.stop(true, true).fadeIn(fadeTime).promise().then(function() {
                $(this).css('display','flex')
                    .attr('aria-hidden','false')
                    .removeClass('dis-hide');
                JLJS_domModuleControl.currentOpenModal = $(this);
                $(this).offset({
                    top: $(window).scrollTop() + (($(window).height() - $(this).height()) / 2),
                    left: $(window).scrollLeft() + (($(window).width() - $(this).width()) / 2)
                });
            });
            this.$overlay.fadeIn(overlayTime)
                .removeClass('dis-hide');
            $('#JS_domIntl_intMessegeCancel').on('click', function(e) {
                closeMessegeBox();
                $messegeDiff.reject('cancel');
                return false;
            });
            this.$dialogTitleMarket.find('[data-btn="JS_close"]').on('click', function(e) {
                closeMessegeBox();
                $messegeDiff.reject('cancel');
                return false;
            });
            $ul.find('.JS_marketChangeSubmit').on('click', function() {
                var $this = $(this);
                JLJS_domModuleControl.submitData['JS_language'] = $this.attr('data-value');
                closeMessegeBox();
                $messegeDiff.resolve();
                return true;
            });
            this.$dialogTitleMarket.find('[data-value]').on('click', function(e) {
                var value = $(this).attr('data-value');
                var $ifreme = $('<iframe>').attr('src', '');
                $(document.body).append($ifreme);
                $ifreme.on('load', function() {
                    JLJS_domModuleControl.submitData['JS_language'] = value;
                    closeMessegeBox();
                    $messegeDiff.resolve();
                });
                return false;
            });
            return $messegeDiff;
        };
    })(),
    judgeDomInter : function(isDep, market){
        var domInter = 'dom';
        var depVal = $(this.$depValAir).val();
        var arrVal = $(this.$arrValAir).val();
        if(depVal || arrVal){
            if($(this.$depValAir).attr('domInter') === 'inter' || $(this.$arrValAir).attr('domInter') === 'inter'){
                domInter = 'inter';
            }
        }
        if(this.domInter !== domInter || !this.JLJS_domIntl_selectControl.getLiLength()){
            this.domInter = domInter;
            this.changeContent();
            this.unselectClassRadio();
        }
        var type = '';
        if(isDep) {
            type = 'dom';
        } else if(this.submitData['JS_departureCountryCode'] !== 'JPN') {
            type = 'inter';
        } else {
            type = 'dom';
        }
        this.JLJS_domIntl_aiportSelectControl.resetupAreaSelect(isDep, market, type);
    },
    changeContent : function(){
        this.beforeDepDate = new Date(this.switchDate.getTime());
        this.beforeDepDate.setDate(this.beforeDepDate.getDate() - 1);
        var classInfo = this.CLASS_SET.dom;
        var classLabel = {label:classInfo[0].label, val:classInfo[0].val};

        if(this.domInter !== 'dom'){
            classInfo = this.CLASS_SET.int;
            classLabel = {label:this.NOT_CLASS_SELECTED, val:''};
        }
        if(this.domInter !== 'dom'){
            this.$JS_domIntl_dataSearchType.find('.check-select').removeClass('dis-hide');
            this.$JS_domIntl_dataSearchType.find('.aco-inter-option').removeClass('dis-hide');
            //this.$JS_domIntl_dataSearchType.find('.JS_interOnly').removeClass('dis-hide');
            $('#JS_domIntl_packagePassenger').find('.JS_interOnly').removeClass('dis-hide');
            $('#JS_domIntl_packagePassenger').find('.JS_domOnly').addClass('dis-hide');
            this.$domAirChgBtn.addClass('dis-hide');
            this.$airLblInrWrapper.addClass('non-replace');
            this.$discountTypeDiv.addClass('dis-hide');
        }else{
            this.$JS_domIntl_dataSearchType.find('.check-select').addClass('dis-hide');
            this.$JS_domIntl_dataSearchType.find('.aco-inter-option').addClass('dis-hide');
            //this.$JS_domIntl_dataSearchType.find('.JS_interOnly').addClass('dis-hide');
            $('#JS_domIntl_packagePassenger').find('.JS_interOnly').addClass('dis-hide');
            $('#JS_domIntl_packagePassenger').find('.JS_domOnly').removeClass('dis-hide');
            this.$domAirChgBtn.removeClass('dis-hide');
            this.$airLblInrWrapper.removeClass('non-replace');
        }
        this.setSpecificInfo();
        this.submitData['JS_nbAdt'] = 1;
        this.submitData['JS_nbYadt'] = 0;
        this.submitData['JS_nbChd'] = 0;
        this.submitData['JS_nbInf'] = 0;
        this.dispPassenger();

        $(this.$seatCls).find('span').text(classLabel.label);
        this.submitData['JS_cff'] = classLabel.val;
        this.JLJS_domIntl_selectControl.setup(classInfo);
        this.JLJS_domIntl_discountControl.setup(this.DISCOUNT_SET)

        this.$depDate.find('div').html('<span>往路搭乗日</span>');
        this.$depDate.attr('depdate-id', '');
        this.$depDate.attr('arrdate-id', '');
        this.$arrDate.find('div').html('<span>復路搭乗日</span>');
        this.$arrDate.attr('depdate-id', '');
        this.$arrDate.attr('arrdate-id', '');
        this.$depDatetime.find('span').text('指定なし');
        this.$arrDatetime.find('span').text('指定なし');
        this.submitData['JS_departureYear'] = '';
        this.submitData['JS_departureMonth'] = '';
        this.submitData['JS_departureDay'] = '';
        this.submitData['JS_departureDate'] = '';
        this.submitData['JS_departureDatetime'] = '00';
        this.submitData['JS_departureYear2'] = '';
        this.submitData['JS_departureMonth2'] = '';
        this.submitData['JS_departureDay2'] = '';
        this.submitData['JS_departureDate2'] = '';
        this.submitData['JS_departureDatetime2'] = '00';
        $('#JS_domIntl_lbTimeNon').click();
    },

    createDateElm : function(depDate, arrDate){
        var dayOfWeek = {
            ja : ['日','月','火','水','木','金','土'],
            en : ['Sun','Mon','Tue','Wed','Tur','Fri','Sat']
        }
        if(depDate){
            var depFormatDate = this.formatDate(depDate);
            this.$depDate.find('div').html(
                '<span class="year-num">' + depFormatDate.year + '年</span>' +
                '<span class="date-num">' + depFormatDate.month + '</span>月' +
                '<span class="date-num">' + depFormatDate.day + '</span>日' +
                '<span class="day-week">(' + dayOfWeek['ja'][depFormatDate.dayOfWeek] + ')</span>'
            );
            this.$depDate.attr('depdate-id', String(depDate.getFullYear()) + String(('00' + (depDate.getMonth()+1)).slice(-2)) + String(('00' + depDate.getDate()).slice(-2)));
            if(arrDate) this.$depDate.attr('arrdate-id', String(arrDate.getFullYear()) + String(('00' + (arrDate.getMonth()+1)).slice(-2)) + String(('00' + arrDate.getDate()).slice(-2)));
        }else{
            this.$depDate.find('div').html('<span>往路搭乗日</span>');
        }
        if(arrDate){
            var arrFormatDate = this.formatDate(arrDate);
            this.$arrDate.find('div').html(
                '<span class="year-num">' + arrFormatDate.year + '年</span>' +
                '<span class="date-num">' + arrFormatDate.month + '</span>月' +
                '<span class="date-num">' + arrFormatDate.day + '</span>日' +
                '<span class="day-week">(' + dayOfWeek['ja'][arrFormatDate.dayOfWeek] + ')</span>'
            );
            if(depDate) this.$arrDate.attr('depdate-id', String(depDate.getFullYear()) + String(('00' + (depDate.getMonth()+1)).slice(-2)) + String(('00' + depDate.getDate()).slice(-2)));
            this.$arrDate.attr('arrdate-id', String(arrDate.getFullYear()) + String(('00' + (arrDate.getMonth()+1)).slice(-2)) + String(('00' + arrDate.getDate()).slice(-2)));
        }else{
            this.$arrDate.find('div').html('<span>復路搭乗日</span>');
        }
    },

    formatDate : function(date){
        return {
            year : date.getFullYear(),
            month : ('00' + (date.getMonth()+1)).slice(-2),
            day : ('00' + date.getDate()).slice(-2),
            dayOfWeek : date.getDay()
        };
    },

    getIntSubmitDate : function(type) {
        var year, month, day, time;
        if(type === 'dep1') {
            year = this.submitData['JS_departureYear'];
            month = this.submitData['JS_departureMonth'];
            day = this.submitData['JS_departureDay'];
            time = this.submitData['JS_departureDatetime'] + '00';
        } else if(type === 'dep2') {
            year = this.submitData['JS_departureYear2'];
            month = this.submitData['JS_departureMonth2'];
            day = this.submitData['JS_departureDay2'];
            time = this.submitData['JS_departureDatetime2'] + '00';
        } else {
            return "";
        }

        var format00 = function(val) {
            return ("0" + val).slice(-2);
        }
        return year + format00(month) + format00(day) + time;
    },

    checkArea: function(){
        var $activeElm = $(document.activeElement);
        var isDepDelete = false;
        var isArrDelete = false;
        if($activeElm.hasClass('JS_domIntl_selectDelete')) {
            isDepDelete = $activeElm.parent().find('input').get(0).id === 'JS_domIntl_departureAirport' ? true : false;
            if(!isDepDelete) {
                isArrDelete = true;
            }
        }
        if(this.$depValAir.val() !== this.$depValAir.attr('disp')){
            this.$depValAir.val(this.$depValAir.attr('disp'));
            this.$depValAirSpLabel.html(this.$depValAir.attr('disp'));
        }
        if(!this.$depValAir.val() && !isDepDelete){
            this.$depLbAir.find('.txt-placeholder').css('display', '');
        }else{
            this.$depLbAir.find('.txt-placeholder').css('display', 'none');
        }
        if(this.$arrValAir.val() !== this.$arrValAir.attr('disp')){
            this.$arrValAir.val(this.$arrValAir.attr('disp'));
            this.$arrValAirSpLabel.html(this.$arrValAir.attr('disp'));
        }
        if(!this.$arrValAir.val() && !isArrDelete){
            this.$arrLBAir.find('.txt-placeholder').css('display', '');
        }else{
            this.$arrLBAir.find('.txt-placeholder').css('display', 'none');
        }
        if(this.$depValAir.val() && this.$arrValAir.val()){
            var nonStopRoots = JLJS_INTER_ROOT_DATA.DIRECT_NON_STOP_ROOT;
            for(var i = 0; i < nonStopRoots.length; i++){
                if(this.$depValAir.attr('cityCode') === nonStopRoots[i][0] &&
                    this.$arrValAir.attr('cityCode') === nonStopRoots[i][1]){
                    if(JLJS.isPcSite()){
                        $('#JS_domIntl_nonStopCheck').css('display', '');
                        break;
                    }
                }else{
                    $('#JS_domIntl_nonStopCheck').css('display', 'none');
                }
            }
        }
    },

    domChangeArea : function(){
        var $depArea = this.$depValAir, $arrArea = this.$arrValAir;
        var depAreaData = {
            cityName : $depArea.attr('cityName') || '',
            cityCode : $depArea.attr('cityCode') || '',
            airportName : $depArea.attr('airportName') || '',
            market : $depArea.attr('market') || '',
            domInter : $depArea.attr('domInter') || '',
            countryCode : $depArea.attr('countryCode') || ''
        };
        var arrAreaData = {
            cityName : $arrArea.attr('cityName') || '',
            cityCode : $arrArea.attr('cityCode') || '',
            airportName : $arrArea.attr('airportName') || '',
            market : $arrArea.attr('market') || '',
            domInter : $arrArea.attr('domInter') || '',
            countryCode : $arrArea.attr('countryCode') || ''
        };
        if(!depAreaData.cityCode && !arrAreaData.cityCode){return;}
        var dispArrCode = this.checkThreeLetter(arrAreaData.cityCode,arrAreaData.airportName,false);
        var arrArea = (arrAreaData.cityName == '')? '' : (arrAreaData.cityName + '(' + dispArrCode + ')');
        this.$depValAir.val(arrArea).attr({
            disp : arrArea,
            market : arrAreaData.market,
            cityName : arrAreaData.cityName,
            cityCode : arrAreaData.cityCode,
            airportName : arrAreaData.airportName,
            domInter : arrAreaData.domInter,
            countryCode : arrAreaData.countryCode
        });
        this.$depValAirSpLabel.html(arrArea);
        this.submitData['JS_departureLocation'] = arrAreaData.cityCode;
        this.submitData['JS_departureCityName'] = arrAreaData.cityName;
        this.submitData['JS_departureAirportName'] = arrAreaData.airportName;
        this.submitData['JS_departureCountryCode'] = arrAreaData.countryCode;
        this.submitData['JS_departureDomInter'] = arrAreaData.domInter;
        this.submitData['JS_arrivalLocation2'] = arrAreaData.cityCode;
        this.submitData['JS_countrySite'] = arrAreaData.market;
        var selections = 'whole_exJPN_01';
        var areaKey = JLJS_airportControl.getSSAreaKeyFromCityCd(selections, arrAreaData.cityCode);
        this.submitData['JS_departureArea'] = areaKey;
        this.submitData['JS_arrivalArea2'] = areaKey;
        var dispDepCode = this.checkThreeLetter(depAreaData.cityCode,depAreaData.airportName,false);
        var depArea = (depAreaData.cityName == '')? '' : (depAreaData.cityName + '(' + dispDepCode + ')');
        this.$arrValAir.val(depArea).attr({
            disp : depArea,
            market : depAreaData.market,
            cityName : depAreaData.cityName,
            cityCode : depAreaData.cityCode,
            airportName : depAreaData.airportName,
            domInter : depAreaData.domInter,
            countryCode : depAreaData.countryCode
        });
        this.$arrValAirSpLabel.html(depArea);
        this.submitData['JS_arrivalLocation'] = depAreaData.cityCode;
        this.submitData['JS_arrivalCityName'] = depAreaData.cityName;
        this.submitData['JS_arrivalAirportName'] = depAreaData.airportName;
        this.submitData['JS_arrivalCountryCode'] = depAreaData.countryCode;
        this.submitData['JS_arrivalDomInter'] = depAreaData.domInter;
        this.submitData['JS_departureLocation2'] = depAreaData.cityCode;
        var selections = JLJS_airportControl.getSelectionSetsFromMarket(depAreaData.market);
        var areaKey = JLJS_airportControl.getSSAreaKeyFromCityCd(selections, depAreaData.cityCode);
        this.submitData['JS_departureArea2'] = areaKey;
        this.submitData['JS_arrivalArea'] = areaKey;

        this.checkArea();
    },

    openAirportSelect : function($elm,pos,$lbAir) {
        var _this = this;
        var scrollHeight;
        $elm.attr('aria-hidden','false');
        $elm.children().attr('aria-hidden','false');
        $elm.find('.JS_scrollArea').attr('aria-hidden','false');
        this.currentOpenModal = $elm;
        this.lastFocusedElm = $lbAir;
        var fadeTime = (JLJS.isPcSite())? 10 : 0;
        $('#JS_domIntl_AirSelOverlay').fadeIn(fadeTime);
        $(this.WRAP).fadeIn(fadeTime).promise().done(function(){
            $(this).offset(pos.offset).css(pos.backPos).removeClass('dis-hide');
            if($lbAir) $lbAir.focus();
            if(!JLJS.isPcSite() && !_this.$body.hasClass('overlay-fixed')) {
                _this.modalOpenOffsetY = window.pageYOffset;
                _this.$body.addClass('overlay-fixed').css('top', '-'+_this.modalOpenOffsetY+'px');
            }
        });
    },

    closeAirportSelect : function($elm) {
        if($elm.is(':animated')){ return; }
        if(this.$body.hasClass('overlay-fixed')) {
            this.$body.removeClass('overlay-fixed').css('top','');
            window.scrollTo(0,this.modalOpenOffsetY);
        }

        this.checkArea();
        var $airOverlay= $('#JS_domIntl_AirSelOverlay');
        if($airOverlay.hasClass('js_isAnim')) { return; }
        $elm.find('[data-content="JS-areaSelect"] div:first').scrollTop(0);
        $elm.fadeOut(0);
        this.closeAirportOverlay();
        if(this.lastFocusedElm !== '' && this.lastFocusedElm !== null) {
            this.lastFocusedElm.focus();
            this.lastFocusedElm = null;
        }
        var $suggestedItem = $(this.WRAP).find('.JS_suggestSelect');
        if($suggestedItem.length > 0){
            $suggestedItem.removeClass('.JS_suggestSelect');
        }
        this.currentOpenModal = null;
        this.JLJS_domIntl_aiportSelectControl.resetTemporarySuggestList();
    },

    closeAirportOverlay : function(){
        var $airOverlay = $('#JS_domIntl_AirSelOverlay');
        $airOverlay.stop(true, true).fadeOut(0);
    },

    openModal : function($elm) {
        var _this = this;
        this.currentOpenModal = $elm;
        var fadeTime = 290;
        var overlayTime = 300;
        if(!JLJS.isPcSite()){
            fadeTime = 0;
            overlayTime = 10;
        }
        $elm.fadeIn(fadeTime,function() {

            if($elm.attr('id') === 'JS_dispCalendar') {
                _this.lastFocusedElm = $(document.activeElement);
                JLJS_CalNav.setCal.preventTabbing(true);
            }
            if(!_this.$body.hasClass('overlay-fixed')) {
                _this.modalOpenOffsetY = window.pageYOffset;
                _this.$body.addClass('overlay-fixed').css('top', '-'+_this.modalOpenOffsetY+'px');
            }
        }).css('display','flex')
            .attr('aria-hidden','false')
            .removeClass('dis-hide');
        this.$overlay.fadeIn(overlayTime)
            .removeClass('dis-hide');
    },

    closeModal: function(){
        if(this.$overlay.hasClass('js_isAnim')) { return; }
        if(this.$body.hasClass('overlay-fixed')) {
            this.$body.removeClass('overlay-fixed').css('top','');
            window.scrollTo(0,this.modalOpenOffsetY);
        }
        var fadeTime = 290;
        var overlayTime = 300;
        if(!JLJS.isPcSite()){
            fadeTime = 0;
            overlayTime = 10;
        }
        this.currentOpenModal.fadeOut(fadeTime, function() {
            $(this).attr('aria-hidden','true')
                .addClass('dis-hide');
        });
        this.$overlay.addClass('js_isAnim')
            .fadeOut(overlayTime, function() {
                $(this).addClass('dis-hide').removeClass('js_isAnim');
            });
        if(this.lastFocusedElm !== '' && this.lastFocusedElm !== null) {
            this.lastFocusedElm.focus();
            this.lastFocusedElm = null;
        }
        this.currentOpenModal = null;

        this.closeAirportOverlay();
    },
    setHistoryCookie : function(){
        var history = this.getHistoryCookie();
        var depData = [];
        var arrData = [];
        var memData = [];
        depData[0] = $(this.$depValAir).attr('cityCode');
        arrData[0] = $(this.$arrValAir).attr('cityCode');
        memData[0] = this.submitData['JS_nbAdt'];
        memData[1] = this.submitData['JS_nbYadt'];
        memData[2] = this.submitData['JS_nbChd'];
        memData[3] = this.submitData['JS_nbInf'];

        var depHistory = history['dep'] || [];
        var arrHistory = history['arr'] || [];
        var memHistory = history['mem'] || [];
        if(depData[0] == arrData[0] || depData[0] == "" || arrData[0] == "" || (memData[0] == 0 && memData[1] == 0 && memData[2] == 0)){
            return;
        }

        var depUpdate = depHistory.concat();
        for(var i = 0; i < depHistory.length; i++){
            var val = depHistory[i];
            if(depData[0] === val[0]){
                depUpdate.splice(i,1);
            }
            if(i === depHistory.length -1){
                depUpdate.unshift(depData);
                if(depUpdate.length > 3) depUpdate.pop();
            }
        }
        if(depHistory.length === 0){
            depUpdate[0] = depData;
        }

        var arrUpdate = arrHistory.concat();
        for(var i = 0; i < arrHistory.length; i++){
            var val = arrHistory[i];
            if(arrData[0] === val[0]){
                arrUpdate.splice(i,1);
            }
            if(i === arrHistory.length -1){
                arrUpdate.unshift(arrData);
                if(arrUpdate.length > 3) arrUpdate.pop();
            }
        }
        if(arrHistory.length === 0){
            arrUpdate[0] = arrData;
        }

        var memUpdate = memHistory.concat();
        if(memHistory.length === 0){
            memUpdate[0] = memData;
        }else{
            memUpdate.unshift(memData);
            if(memUpdate.length > 3) memUpdate.pop();
        }

        var cookie = {
            dep : JSON.stringify(depUpdate),
            arr : JSON.stringify(arrUpdate),
            mem : JSON.stringify(memUpdate)
        };
        var cookieOption = {domain : ".jal.co.jp"};
        var date = new Date();
        date.setFullYear(date.getFullYear() + 1);
        var expires = date.toGMTString();
        cookieOption.expires = expires;
        if(window.location.hostname.match(/^[0-9\.]+$/)){
            delete cookieOption.domain;
        }
        JLJS_CookieMgr.setMulti(this.CK_HISTORY, cookie, cookieOption);
    },

    unselectClassRadio : function(){
        var checkedRadioButtons = $("input[name=" + this.JLJS_domIntl_selectControl.JS_name +"]:checked");

        if(this.domInter === 'inter' && checkedRadioButtons[0] && !this.submitData.JS_cff){
            checkedRadioButtons[0].checked = false;
        }
    },

    checkThreeLetter : function(cd,airportName,toDataName) {
        var checkCd = toDataName ? ['NGO','TPE','SHA'] : ['NGY','TPE+','SHA+'];
        var index = $.inArray(cd,checkCd);
        if(index > -1) {
            var setCd = toDataName ? ['NGY','TPE+','SHA+'] : ['NGO','TPE','SHA'];
            if((index === 0 && airportName.match(/すべての空港/g)) ||
                (index > 0 && !airportName.match(/すべての空港/g))) {
                return setCd[index];
            }
            return cd;
        } else {
            return cd;
        }
    },

    selectArea : function(_this, isEnter){
        var $elm = isEnter ? $(this.WRAP).find('[data-content="JS-suggest"]').find('li:first') : $(_this);
        var depOrArr = $(this.WRAP).attr('JS_DepOrArr');
        //var cityName = $elm.find('[data-content="JS_city"]').text();
        var cityName = $elm.find('.JS_itemCity').attr('cityName');
        var threeLetter = $elm.find('[data-content="JS_CD"]').text();
        var airportName = $elm.find('[data-content="JS_airport"]').text();
        var market = $elm.find('.JS_itemCity').attr('market');
        var domInter = $elm.find('.JS_itemCity').attr('domInter');
        var countryCode = $elm.find('.JS_itemCity').attr('countryCode');
        var dataThreeLetter;
        var area;
        var hidden;
        if(!cityName) return;
        if(this.suggestSeachKeyword){
            var analyticsArg1 = (depOrArr === 'dep')? '[共通F&S]モジュール検索出発' : '[共通F&S]モジュール検索到着';
            var analyticsArg2 = this.suggestSeachKeyword;
            var analyticsArg3 = cityName + '(' + threeLetter + ')';
            JLJS_analysisCommon.pushGtmClickEvent(analyticsArg1, analyticsArg2, analyticsArg3);
        }
        var searchHistoryAnalytics = $elm.attr('data-searchHistory_analytics');
        if(searchHistoryAnalytics) {
            var dataArray = searchHistoryAnalytics.split(',');
            JLJS_analysisCommon.pushGtmClickEvent(dataArray[0], dataArray[1], dataArray[2]);
        }
        dataThreeLetter = this.checkThreeLetter(threeLetter,airportName,true);
        if(depOrArr === 'dep'){
            $(this.$depValAir).val(cityName + '(' + threeLetter + ')');
            $(this.$depValAirSpLabel).html(cityName + '(' + threeLetter + ')');
            $(this.$depValAir).attr('disp', cityName + '(' + threeLetter + ')');
            $(this.$depValAir).attr('market', market);
            $(this.$depValAir).attr('cityName', cityName);
            $(this.$depValAir).attr('cityCode', dataThreeLetter);
            $(this.$depValAir).attr('airportName', airportName);
            $(this.$depValAir).attr('domInter', domInter);
            $(this.$depValAir).attr('countryCode', countryCode);
            this.submitData['JS_departureLocation'] = dataThreeLetter;
            this.submitData['JS_departureCityName'] = cityName;
            this.submitData['JS_departureAirportName'] = airportName;
            this.submitData['JS_departureCountryCode'] = countryCode;
            this.submitData['JS_departureDomInter'] = domInter;
            this.submitData['JS_arrivalLocation2'] = dataThreeLetter;
            this.submitData['JS_countrySite'] = market;
            if(!market) market = 'DEFAULT';
            this.judgeDomInter(false, market);
            var selections = 'whole_exJPN_01';
            var areaKey = JLJS_airportControl.getSSAreaKeyFromCityCd(selections, dataThreeLetter);
            this.submitData['JS_departureArea'] = areaKey;
            this.submitData['JS_arrivalArea2'] = areaKey;
            if(domInter !== 'dom') this.clearArea();
            this.$depLbAir.focus();
        }else{
            $(this.$arrValAir).val(cityName + '(' + threeLetter + ')');
            $(this.$arrValAirSpLabel).html(cityName + '(' + threeLetter + ')');
            $(this.$arrValAir).attr('disp', cityName + '(' + threeLetter + ')');
            $(this.$arrValAir).attr('market', market);
            $(this.$arrValAir).attr('cityName', cityName);
            $(this.$arrValAir).attr('cityCode', dataThreeLetter);
            $(this.$arrValAir).attr('airportName', airportName);
            $(this.$arrValAir).attr('domInter', domInter);
            $(this.$arrValAir).attr('countryCode', countryCode);
            this.submitData['JS_arrivalLocation'] = dataThreeLetter;
            this.submitData['JS_arrivalCityName'] = cityName;
            this.submitData['JS_arrivalAirportName'] = airportName;
            this.submitData['JS_arrivalCountryCode'] = countryCode;
            this.submitData['JS_arrivalDomInter'] = domInter;
            this.submitData['JS_departureLocation2'] = dataThreeLetter;
            this.judgeDomInter(false);
            var selections = JLJS_airportControl.getSelectionSetsFromMarket($(this.$depValAir).attr('market'));
            var areaKey = JLJS_airportControl.getSSAreaKeyFromCityCd(selections, dataThreeLetter);
            this.submitData['JS_departureArea2'] = areaKey;
            this.submitData['JS_arrivalArea'] = areaKey;
            this.$arrLBAir.focus();
        }
        $('#JS_domIntl_errorMessage').css('display', 'none');
        this.dispPassenger();
        this.setSpecificInfo();
        if($(this.WRAP).is(':visible')){
            this.closeAirportSelect($(this.WRAP));
        }
    },

    clearArea : function(){
        $(this.$arrValAir).val('');
        $(this.$arrValAirSpLabel).html('');
        $(this.$arrValAir).attr('disp', '');
        $(this.$arrValAir).attr('market', '');
        $(this.$arrValAir).attr('cityName', '');
        $(this.$arrValAir).attr('cityCode', '');
        $(this.$arrValAir).attr('airportName', '');
        $(this.$arrValAir).attr('domInter', '');
        $(this.$arrValAir).attr('countryCode', '');
        this.submitData['JS_arrivalLocation'] = '';
        this.submitData['JS_arrivalCityName'] = '';
        this.submitData['JS_arrivalAirportName'] = '';
        this.submitData['JS_arrivalCountryCode'] = '';
        this.submitData['JS_arrivalDomInter'] = '';
        this.submitData['JS_departureLocation2'] = '';
        //this.judgeDomInter(false);
        this.submitData['JS_departureArea2'] = '';
        this.submitData['JS_arrivalArea'] = '';
    },

    dispPassenger : function(){
        if(!$('#JS_domintl_formAlert1').hasClass('dis-hide')) $('#JS_domintl_formAlert1').addClass('dis-hide');
        if(!$('#JS_domintl_formAlert2').hasClass('dis-hide')) $('#JS_domintl_formAlert2').addClass('dis-hide');
        if(!$('#JS_domintl_formAlert3').hasClass('dis-hide')) $('#JS_domintl_formAlert3').addClass('dis-hide');

        var _setPassenger = function(target, text, isShow){
            var targetIds = {
                'adult':'JS_domIntl_adultPassenger',
                'youth':'JS_domIntl_youthPassenger',
                'child':'JS_domIntl_childPassenger',
                'infant':'JS_domIntl_infantPassenger'
            };
            var targetId = targetIds[target];
            if(!targetId){ return false; }

            var $target = $('#'+targetId);
            text = String(text);
            $target.text(text);
            (text === '0')? $target.addClass('un-select') : $target.removeClass('un-select');
            if(isShow){
                $target.show();
                $target.prev().show();
            } else {
                $target.hide();
                $target.prev().hide();
            }
        };

        var isHideYouth = false;
        var youthNum = (function(num){
            return (isNaN(num))? 0 : num;
        })(parseInt(this.submitData['JS_nbYadt'], 10));
        var depCountyCode = $(this.$depValAir).attr('countryCode');
        var arrCountyCode = $(this.$arrValAir).attr('countryCode');

        var passengerInfo;
        if(this.domInter === 'dom'){

            $elm = $('#JS_domIntl_packagePassenger').find('.JS_domOnly');
            if(!this.isOverSwitchDate(this.getBoardingDate('departure'))){
                passengerInfo = [
                    {
                        label : '大人',
                        detail : '12歳～',
                        code : 'JS_domIntl_Adult',
                        default : this.submitData['JS_nbAdt'],
                        max : 6,
                        min : 0
                    },
                    {
                        label : '小児',
                        detail : '3～11歳',
                        code : 'JS_domIntl_Child',
                        default : this.submitData['JS_nbChd'],
                        max : 6,
                        min : 0
                    },
                    {
                        label : '幼児',
                        detail : '0～2歳',
                        code : 'JS_domIntl_Infant',
                        default : this.submitData['JS_nbInf'],
                        max : 2,
                        min : 0
                    }
                ];

                if(this.isOverSwitchDate(this.beforeDepDate)){
                    this.submitData['JS_nbAdt'] = 1;
                    this.submitData['JS_nbChd'] = 0;
                    this.submitData['JS_nbInf'] = 0;
                }

                $elm.find('.form-alert-dialog').eq(0).addClass('dis-hide');
                $elm.find('.form-alert-dialog').eq(1).removeClass('dis-hide');
            }else{
                passengerInfo = [
                    {
                        label : '大人',
                        detail : '12歳～',
                        code : 'JS_domIntl_Adult',
                        default : this.submitData['JS_nbAdt'],
                        max : 9,
                        min : 0
                    },
                    {
                        label : '小児',
                        detail : '3～11歳',
                        code : 'JS_domIntl_Child',
                        default : this.submitData['JS_nbChd'],
                        max : 9,
                        min : 0
                    },
                    {
                        label : '幼児',
                        detail : '0～2歳',
                        code : 'JS_domIntl_Infant',
                        default : this.submitData['JS_nbInf'],
                        max : 2,
                        min : 0
                    }
                ];

                if (!this.isOverSwitchDate(this.beforeDepDate)) {
                    this.submitData['JS_nbAdt'] = 1;
                    this.submitData['JS_nbChd'] = 0;
                    this.submitData['JS_nbInf'] = 0;
                }

                $elm.find('.form-alert-dialog').eq(0).removeClass('dis-hide');
                $elm.find('.form-alert-dialog').eq(1).addClass('dis-hide');
            }

            isHideYouth = true;
            youthNum = 0;
            this.submitData['JS_nbYadt'] = 0;
            _setPassenger('youth', 0, false);
            _setPassenger('child', this.submitData['JS_nbChd'], true);
            _setPassenger('infant', this.submitData['JS_nbInf'], true);
        } else {
            passengerInfo = [
                {
                    label : '大人',
                    detail : '12歳～',
                    code : 'JS_domIntl_Adult',
                    default : this.submitData['JS_nbAdt'],
                    max : 9,
                    min : 1
                },
                {
                    label : 'ユース',
                    detail : '12～15歳',
                    code : 'JS_domIntl_Youth',
                    default : this.submitData['JS_nbYadt'],
                    max : 9,
                    min : 0
                },
                {
                    label : '小児',
                    detail : '2～11歳',
                    code : 'JS_domIntl_Child',
                    default : this.submitData['JS_nbChd'],
                    max : 9,
                    min : 0
                },
                {
                    label : '幼児',
                    detail : '0～1歳',
                    code : 'JS_domIntl_Infant',
                    default : this.submitData['JS_nbInf'],
                    max : 4,
                    min : 0
                }
            ];
            if($(this.$arrValAir).attr('cityCode') === 'QYG'){
                passengerInfo.splice(1,1);
                passengerInfo.splice(2,1);
                isHideYouth = true;
                this.submitData['JS_nbYadt'] = 0;

                this.submitData['JS_nbInf'] = 0;
                _setPassenger('youth', this.submitData['JS_nbYadt'], false);
                _setPassenger('child', this.submitData['JS_nbChd'], true);
                _setPassenger('infant', this.submitData['JS_nbInf'], false);
                $('#JS_domintl_formAlert2').removeClass('dis-hide');
            }else if($(this.$arrValAir).attr('cityCode') === 'UKY'){
                passengerInfo.splice(1,3);
                isHideYouth = true;
                this.submitData['JS_nbYadt'] = 0;
                this.submitData['JS_nbChd'] = 0;
                this.submitData['JS_nbInf'] = 0;
                _setPassenger('youth', this.submitData['JS_nbYadt'], false);
                _setPassenger('child', this.submitData['JS_nbChd'], false);
                _setPassenger('infant', this.submitData['JS_nbInf'], false);
                $('#JS_domintl_formAlert3').removeClass('dis-hide');
            }else if(((depCountyCode && depCountyCode.indexOf('GBR_JPMKT') !== -1) ||
                (arrCountyCode && arrCountyCode.indexOf('GBR_JPMKT') !== -1))){
                passengerInfo[0]['detail'] = '16歳～';
                passengerInfo[0]['min'] = 0;
                _setPassenger('adult', this.submitData['JS_nbAdt'], true);
                _setPassenger('youth', this.submitData['JS_nbYadt'], true);
                _setPassenger('child', this.submitData['JS_nbChd'], true);
                _setPassenger('infant', this.submitData['JS_nbInf'], true);
            } else {
                passengerInfo.splice(1,1);
                isHideYouth = true;
                this.submitData['JS_nbYadt'] = 0;
                _setPassenger('youth', this.submitData['JS_nbYadt'], false);
                _setPassenger('child', this.submitData['JS_nbChd'], true);
                _setPassenger('infant', this.submitData['JS_nbInf'], true);
            }
        }


        if(isHideYouth){
            var nbAdt = parseInt(this.submitData['JS_nbAdt'], 10);
            var nbAdtMax = passengerInfo[0]['max'];
            nbAdt = ((nbAdt + youthNum) > nbAdtMax)? nbAdtMax : (nbAdt + youthNum);
            this.submitData['JS_nbAdt'] = nbAdt;
            _setPassenger('adult', this.submitData['JS_nbAdt'], true);
            passengerInfo[0]['default'] = this.submitData['JS_nbAdt'];
        }

        var info = {};
        for(var i = 0; i < passengerInfo.length; i++){
            info[passengerInfo[i]['code']] = passengerInfo[i]['default'];
        }
        this.JLJS_domIntl_passengerControl.setup(passengerInfo);
        this.JLJS_domIntl_passengerControl.resetup(info);
    },

    clickInputAir : function($lbAir, airKey, $this){
        if($(this.$tmplWrap).css('display') !== 'none') this.closeModal();
        var lblWidth = $lbAir.parent().parent().innerWidth() + 'px';
        $(this.$tmplWrap).css({
            width : lblWidth
        });
        this.suggestSeachKeyword = '';
        this.JLJS_domIntl_aiportSelectControl.reset();
        this.JLJS_domIntl_aiportSelectControl.setHeight();
        this.checkArea();
        $(this.WRAP).attr('JS_DepOrArr', airKey);
        $(this.WRAP).find('[data-content="JS-suggest"]').css('display', 'none');
        this.$selectDomInterList.removeClass('dis-hide');
        $(this.WRAP).find('.JS_historyHeader').css('display', '');
        this.$domInterAirportListTabBase.addClass('dis-hide');
        this.$dominterAirportListCloseBtn.removeClass('dis-hide');
        this.$domInterAirportListBackBtn.addClass('dis-hide');
        this.$flyingInputLayer01.removeClass('dis-hide');
        this.$flyingInputLayer02.addClass('dis-hide');
        this.$depValAirSP.removeClass('dis-hide');
        this.$arrValAirSP.removeClass('dis-hide');

        $($this).find('.txt-placeholder').css('display', 'none');
        //$lbAir.focus();
        if(airKey === 'dep'){
            this.JLJS_domIntl_aiportSelectControl.createHistory(airKey);
        }else{
            var market = this.submitData['JS_countrySite'];
            var cityCodes = [];
            var jaData;
            if(this.submitData['JS_departureCountryCode'] === 'JPN') jaData = JLJS_DOM_AIRPORT.level1;
            else jaData = JLJS_DOM_AIRPORT.level1_2;
            for(var key in jaData){
                cityCodes = cityCodes.concat(jaData[key].list);
            }
            if(market){
                var selections = JLJS_airportControl.getSelectionSetsFromMarket(market);
                var areaKeys = JLJS_airportControl.getSSAreaKey(selections);
                if(areaKeys.indexOf('JPN_CM') !== -1) areaKeys.splice(areaKeys.indexOf('JPN_CM'), 1);
                JLJS_airportControl.firstDepFlg = false;
                var listCreateFunc = JLJS_airportControl.getTempDataListFunc(JLJS_airportControl.getCountryFiterKeys,JLJS_airportControl.getCityFilterKeys,JLJS_airportControl.getSSAreaOlCityKeys);
                for(var i = 0; i < areaKeys.length; i++){
                    var listCountryCity = listCreateFunc(selections,areaKeys[i]);
                    for(var j = 0; j < listCountryCity.length; j++){
                        if(listCountryCity[j][0] === '主要都市') continue;
                        for(var k = 0; k < listCountryCity[j][1].length; k++){
                            cityCodes.push(listCountryCity[j][1][k][0]);
                        }
                    }
                }
            }
            this.JLJS_domIntl_aiportSelectControl.createHistory(airKey, cityCodes);
        }
        if(JLJS.isPcSite()){
            $(this.$tmplWrap).removeClass('JS_dispSPSize');
            //this.openModal($(this.$tmplWrap),{offset: this.getModalOffset($($this), true), backPos: this.modalArrowPos.normal});
            this.openAirportSelect($(this.$tmplWrap),{offset: this.getModalOffset($($this), true), backPos: this.modalArrowPos.normal},$lbAir);
        }else{
            $(this.$tmplWrap).addClass('JS_dispSPSize');
            //this.openModal($(this.$tmplWrap),{offset: this.getModalOffset($('#JS_domIntl_domLbSelectAir'), false), backPos: this.modalArrowPos.normal});
            this.openAirportSelect($(this.$tmplWrap),{offset: this.getModalOffset($('#JS_domIntl_domLbSelectAir'), false), backPos: this.modalArrowPos.normal},$lbAir);
        }
    },

    suggestSearch : function($val, $lbAir, isArr, airKey){
        var val = $val.val();
        this.JLJS_domIntl_aiportSelectControl.reset();
        if($(this.$tmplWrap).css('display') === 'none'){
            this.clickInputAir($val, airKey, $lbAir);
        }
        $(this.WRAP).find('[data-content="JS-suggest"]').css('display', '');
        this.$selectDomInterList.addClass('dis-hide');
        $(this.WRAP).find('.JS_historyHeader').css('display', 'none');
        $lbAir.find('.JS_domIntl_selectDelete').attr('aria-hidden','false');

        var existsPrevSuggestList = this.JLJS_domIntl_aiportSelectControl.existsPrevSuggestList();
        if(val.length <= 2){
            this.JLJS_domIntl_aiportSelectControl.resetTemporarySuggestList();
        }
        var $ul = this.$suggestArea.find('.candidate-list');
        if(val.length < 2){
            if(val.length === 0){
                $(this.WRAP).find('.JS_historyHeader').css('display', '');
                $(this.WRAP).find('[data-content="JS-suggest"]').css('display', 'none');
                this.$selectDomInterList.removeClass('dis-hide');
                $lbAir.find('.JS_domIntl_selectDelete').attr('aria-hidden','true');
            }
            this.JLJS_domIntl_aiportSelectControl.setHeight($ul);
            return;
        }
        var param = {domAbroad : 'domestic'};
        var market = 'DEFAULT';
        if(isArr){
            market = $(this.$depValAir).attr('market') || 'DEFAULT';
        }
        var selections = JLJS_airportControl.getSelectionSetsFromMarket(market);
        var areaKeys = JLJS_airportControl.getSSAreaKey(selections);
        if(areaKeys.indexOf('JPN_CM') !== -1) areaKeys.splice(areaKeys.indexOf('JPN_CM'), 1);

        if(!isArr) JLJS_airportControl.firstDepFlg = true;
        else JLJS_airportControl.firstDepFlg = false;
        var listCreateFunc = JLJS_airportControl.getTempDataListFunc(JLJS_airportControl.getCountryFiterKeys,JLJS_airportControl.getCityFilterKeys,JLJS_airportControl.getSSAreaOlCityKeys);
        var cityCodes = [];
        var jaData = JLJS_DOM_AIRPORT.level1;
        if(!isArr) jaData = JLJS_DOM_AIRPORT.level1_1;
        else if(this.submitData['JS_departureCountryCode'] !== 'JPN') jaData = JLJS_DOM_AIRPORT.level1_2;
        for(var key in jaData){
            cityCodes = cityCodes.concat(jaData[key].list);
        }
        for(var i = 0; i < areaKeys.length; i++){
            var listCountryCity = listCreateFunc(selections,areaKeys[i]);
            for(var j = 0; j < listCountryCity.length; j++){
                if(listCountryCity[j][0] === '主要都市') continue;
                for(var k = 0; k < listCountryCity[j][1].length; k++){
                    cityCodes.push(listCountryCity[j][1][k][0]);
                }
            }
        }
        param['cityCode'] = cityCodes;
        //param['countryCode'] = ['JPN'];

        var guideMsg = "";
        if(!existsPrevSuggestList){
            guideMsg = this.ACCESSIBLE_GUIDE_MSG.SUGGEST_USAGE;
        }

        var result = JLJS_suggestControl.searchAirport(val, param, 'ja');
        this.JLJS_domIntl_aiportSelectControl.createSuggestList(result, val, $ul, true);
        this.JLJS_domIntl_aiportSelectControl.setHeight($ul);
        this.suggestSeachKeyword = val;

        if(result === 'NODATA'&&!existsPrevSuggestList){
            guideMsg = $ul.text();
        }
        if(guideMsg){
            this.addAccessibleReadMessage(guideMsg);
        }

        this.JLJS_domIntl_aiportSelectControl.disableTabSelect(this.$suggestArea.find('.candidate-item'));
    },

    isValidSearchCondition : function(){
        var isValid = true;
        if(!this.checkValiArea()){
            isValid = false;
        }
        if(!this.checkValiDate()){
            isValid = false;
        }
        if(this.domInter === 'inter' && !this.checkValiClass()){
            isValid = false;
        }

        if(this.domInter === 'dom'){
            var depDate = new Date(this.submitData['JS_departureYear'], this.submitData['JS_departureMonth'] - 1, this.submitData['JS_departureDay']);
            if(this.submitData['JS_pattern'] !== 'oneway'){
                var arrDate = this.submitData['JS_departureYear2'] ? new Date(this.submitData['JS_departureYear2'], this.submitData['JS_departureMonth2'] - 1, this.submitData['JS_departureDay2']) : '';

                if(!this.checkValidSwitchDate(depDate, arrDate)){
                    isValid = false;
                }
            }
            if(this.isOverSwitchDate(depDate) && !this.checkValidDomDiscount()){
                isValid = false;
            }
        }
        return isValid;
    },

    checkValiArea : function(){
        var isValidRoute = true;
        var depList = [];
        var arrList = [];
        var depCityCode = this.submitData['JS_departureLocation'];
        var arrCityCode = this.submitData['JS_arrivalLocation'];
        var depCountryCode = this.submitData['JS_departureCountryCode'];
        var arrCountryCode = this.submitData['JS_arrivalCountryCode'];

        for(var key in JLJS_DOM_AIRPORT.level1){
            depList = depList.concat(JLJS_DOM_AIRPORT.level1[key]['list']);
        }
        for(var key in JLJS_DOM_AIRPORT.level1_2){
            arrList = arrList.concat(JLJS_DOM_AIRPORT.level1_2[key]['list']);
        }
        if(!depCityCode){
            isValidRoute = false;
            this.showAriaElm(this.errorElmMap.$noDepSelect);
        }
        if(!arrCityCode){
            isValidRoute = false;
            this.showAriaElm(this.errorElmMap.$noArrSelect);
        }
        if(depCityCode && arrCityCode && depCityCode === arrCityCode){
            isValidRoute = false;
            this.showAriaElm(this.errorElmMap.$sameCitySelect);
        }

        if((depList.indexOf(depCityCode) === -1 && arrList.indexOf(depCityCode) !== -1 && arrCountryCode === 'JPN') ||
            (depCountryCode === 'JPN' && depList.indexOf(arrCityCode) === -1 && arrList.indexOf(arrCityCode) !== -1) ||
            ((depList.indexOf(depCityCode) !== -1 && arrList.indexOf(depCityCode) === -1 || depCityCode === 'OGN') && arrCountryCode !== 'JPN')){
            isValidRoute = false;
            this.showAriaElm(this.errorElmMap.$segNotInService);
        }
        if(depCountryCode === 'GUM' && arrCountryCode !== 'JPN'){
            isValidRoute = false;
            this.showAriaElm(this.errorElmMap.$noMultiCity);
        }

        for(var i = 0; i<this.UNAVAILABLE_DEP_COUNTRY_LIST.length; i++){
            var unavailableCountryCode = this.UNAVAILABLE_DEP_COUNTRY_LIST[i];
            var unavailableCityCodeArray = this.getCityCodesFromCountryCode(unavailableCountryCode);
            if (unavailableCityCodeArray.indexOf(depCityCode) != -1) {
                isValidRoute = false;
                var countryName = JLJS_TM_airportList.prototype.countries[unavailableCountryCode]['title_J'];
                var $errorMsgElm = this.errorElmMap.$countrySuspended;
                var msg = $errorMsgElm.text();
                msg = msg.replace('${country}',countryName);
                $errorMsgElm.text(msg);
                this.showAriaElm($errorMsgElm);
            }
        }

        return isValidRoute;
    },

    getCityCodesFromCountryCode : function(countryCode){
        var countryList = JLJS_TM_airportList.prototype.countries;
        var country = countryList[countryCode];
        var cityList = country['list'];
        return cityList;
    },

    checkValiDate : function(){
        var depDate = new Date(this.submitData['JS_departureYear'], this.submitData['JS_departureMonth']-1, this.submitData['JS_departureDay']);
        var arrDate = this.submitData['JS_departureYear2'] ?
            new Date(this.submitData['JS_departureYear2'], this.submitData['JS_departureMonth2']-1, this.submitData['JS_departureDay2'])
            : '';
        if(!this.submitData['JS_departureYear'] || (this.submitData['JS_pattern'] !== 'oneway' && !arrDate)){
            this.showAriaElm(this.errorElmMap.$noDateSelectLbl);
            this.$dispSearchComponent.addClass('dep-error-set');
            return false;
        }
        return true;
    },

    checkValiMdlDate : function(depDate,arrDate){
        if(depDate && (arrDate || this.submitData['JS_pattern'] === 'oneway')){
            return true;
        }else{
            this.showAriaElm(this.errorElmMap.$noDateSelectMdl);
            return false;
        }
    },

    checkValiMdlPassenger : function(countValues){
        var adult = parseInt(countValues['JS_domIntl_Adult']);
        var youth = countValues['JS_domIntl_Youth'] ?
            parseInt(countValues['JS_domIntl_Youth']) : 0;
        var child = parseInt(countValues['JS_domIntl_Child']);
        var infant = countValues['JS_domIntl_Infant'] ?
            parseInt(countValues['JS_domIntl_Infant']) : 0;
        var isSelectable = true;

        this.hideAriaElm($('#JS_domIntl_packagePassenger').find('.JS_errorTextElm'));

        if(this.domInter === 'inter'){
            if((adult + youth) <= 0){
                this.showAriaElm(this.errorElmMap.$noAdult);
                isSelectable = false;
            }
            if((adult + youth + child) > 9){
                this.showAriaElm(this.errorElmMap.$tooManyPax);
                isSelectable = false;
            }
            if((child + infant) > ((adult + youth) * 3)){
                this.showAriaElm(this.errorElmMap.$childrenOver);
                isSelectable = false;
            }
            if(infant > adult){
                this.showAriaElm(this.errorElmMap.$enfantOver);
                isSelectable = false;
            }
        }else{
            var depDate = new Date(this.submitData['JS_departureYear'], this.submitData['JS_departureMonth'] - 1, this.submitData['JS_departureDay']);
            if(this.isOverSwitchDate(depDate)){
                if((adult + child) > 9){
                    this.showAriaElm(this.errorElmMap.$tooManyPaxDom);
                    isSelectable = false;
                }
                if(infant > adult){
                    this.showAriaElm(this.errorElmMap.$maxEnfantOver);
                    isSelectable = false;
                }
                if((adult + child) <= 0){
                    this.showAriaElm(this.errorElmMap.$minPassenger);
                    isSelectable = false;
                }
            }
        }
        return isSelectable;
    },

    checkValidDomDiscount : function(){
        var adult = parseInt(this.submitData['JS_nbAdt'], 10);
        var child = parseInt(this.submitData['JS_nbChd'], 10);
        var discount = this.submitData['JS_discount'];
        if((discount == 'DDF' || discount == 'CGF') && adult == 0 && child >= 1){
            this.showAriaElm(this.errorElmMap.$cgfDdfChild);
            return false;
        }
        if(discount == 'JCF' && child >= 1){
            this.showAriaElm(this.errorElmMap.$jcfChild);
            return false;
        }
        return true;
    },

    checkValidSwitchDate : function(departure, arrival){
        if(!this.isOverSwitchDate(departure) && this.isOverSwitchDate(arrival)){
            this.showAriaElm(this.errorElmMap.$switchDay);
            return false;
        }

        return true;
    },

    checkValiClass : function(){
        if(!this.submitData['JS_cff']){
            this.showAriaElm(this.errorElmMap.$noClassSelectLbl);
            return false;
        }
        return true;
    },

    checkValiMdlClass : function(){
        var $checkedRadioButtons = $("input[name=" + this.JLJS_domIntl_selectControl.JS_name +"]:checked");

        if(!$checkedRadioButtons.length){
            this.showAriaElm(this.errorElmMap.$noClassSelectMdl);
            return false;
        }
        return true;
    },

    clearErrorMsg : function(){
        this.hideAriaElm(this.errorElmMap.$all);
        this.$dispSearchComponent.removeClass('dep-error-set');
    },

    moveAccording : function($this, e){
        //if(!JLJS.isPcSite() && e.type ==="mouseup") return;
        if(JLJS_tabControl.getTarget() !== 'domIntl') return;
        //if(JLJS_tabControl.isDomIntlStatus) return;
        $next = $this.next();
        var isOpen = $next.attr('aria-hidden') == 'true';
        resetAria();

        if (isOpen) {
            $this.attr('aria-selected', true);
            $this.attr('aria-expanded', true);
            if($this.attr('id') !== 'JS_domIntl_mldAccordionOption1') $this.addClass('scrollSticky');
            $('[data-content="JS-areaSelect"]').find('.candidate-wrap:first').animate({scrollTop:$this.position().top});
            $next.slideDown();

            adjustScroll();

            $next.attr('aria-hidden', false);
            $this.find('.oepn').addClass('dis-hide');
            $this.find('.close').removeClass('dis-hide');

            var analyticsData = $this.attr('data-open_analytics');
            if(analyticsData) {
                var dataArray = analyticsData.split(',');
                JLJS_analysisCommon.pushGtmClickEvent(dataArray[0], dataArray[1], dataArray[2]);
            }
        }

        function resetAria() {
            $this.attr('aria-selected', false);
            $this.attr('aria-expanded', false);
            if($this.attr('id') !== 'JS_domIntl_mldAccordionOption1') $this.removeClass('scrollSticky');
            $this.parent().find('[aria-hidden="false"]').slideUp();

            var $childElms = $this.parent().find('[aria-hidden="false"]')
            $childElms.slideUp();
            $childElms.find('.close').addClass('dis-hide');
            $childElms.find('.oepn').removeClass('dis-hide');
            $childElms.attr('aria-hidden', true);
            $childElms.find('.scrollSticky').removeClass('scrollSticky');
            $next.find('[aria-expanded="true"]').attr('aria-expanded', false);

            $next.attr('aria-hidden', true);
            $this.find('.close').addClass('dis-hide');
            $this.find('.oepn').removeClass('dis-hide');
        }

        function adjustScroll() {
            var $scrollRoot = $this.closest('.JS_adjustScroll');

            if($scrollRoot.attr('id') === 'JS_domIntl_reservSelectorWrap') {
                var scrollRootPos = $scrollRoot.scrollTop();
                var pos = {};
                if(JLJS.isPcSite()) {
                    pos = $this.position();
                } else {
                    pos = $this.offset();
                }
                $scrollRoot.animate({scrollTop:pos.top + scrollRootPos});
            }
        }
    },

    changeDispClass : function(){
        if(this.domInter !== 'dom') return;
        if(!JLJS.isPcSite()){
            $(this.JLJS_domIntl_selectControl.JS_ID_selectColumn).find('li:first').addClass('dis-hide');
            if(this.submitData['JS_cff'] === 'all'){
                $('#JS_domIntl_LB-class-normal').prop('checked', true);
                this.submitData['JS_cff'] = 'normal';
                this.$seatCls.find('span').text(this.JLJS_domIntl_selectControl.getValue()['label']);
            }else if (this.submitData['JS_cff'] === 'ecoBusiness'){
                $('#JS_domIntl_LB-class-normal').prop('checked', true);
                this.submitData['JS_cff'] = 'eco';
                this.$seatCls.find('span').text(this.JLJS_domIntl_selectControl.getValue()['label']);
            }
        }else{
            $(this.JLJS_domIntl_selectControl.JS_ID_selectColumn).find('li:first').removeClass('dis-hide');
        }
    },

    dispInterClass : function(){
        if(this.domInter === 'dom') return;
        var market = this.submitData['JS_countrySite'];
        var depArea = this.submitData['JS_departureArea'];
        var arrArea = this.submitData['JS_arrivalArea'];
        var rootsetList = JLJS_INTER_CFF_DATA.ROOTSET.filter(function(e, index, array){
            return e.MARKET.filter(function(e){
                return e === market;
            }).length > 0;
        });
        if(rootsetList.length > 1){
            // JAL_JR_JP
            rootsetList = rootsetList.filter(function(e){
                return (
                    e.DEPAREA.filter(function(e){return e === depArea}).length > 0
                    && e.ARRAREA.filter(function(e){return e === arrArea}).length > 0
                );
            });
        }
        var rootset = (rootsetList.length > 0)? rootsetList[0]:{};
        var groupset = (rootset.GROUPSET)? JLJS_INTER_CFF_DATA.GROUPSET[rootset.GROUPSET]:{};
        var fareList = (groupset.FARE)? groupset.FARE[0][groupset.FARE[0].length-1]:[];

        var defaultClass = {label:this.NOT_CLASS_SELECTED, val:'', id:''};
        var classInfo = this.CLASS_SET.int;
        for(var i=0, l=classInfo.length; i<l; i++){
            var cls = classInfo[i];
            var $target = $('#'+cls.id);
            var isShow = (fareList.length === 0 || fareList.indexOf(cls.val) > -1);
            if(isShow){
                $target.closest('li').show();
            } else {
                $target.closest('li').hide();
                if(this.submitData['JS_cff'] === cls.val){
                    $(this.$seatCls).find('span').text(defaultClass.label);
                    this.submitData['JS_cff'] = defaultClass.val;
                    this.unselectClassRadio();
                }
            }
        }
    },

    adjustTextAreaHeight : function($elm){
        var elm = $elm.get(0);
        var scrollHeight = elm.scrollHeight || 43;
        elm.style.height = scrollHeight + 'px';
    },

    changeAirportListTab : function(type) {
        this.$flyingInputLayer01.addClass('dis-hide');
        this.appendAirportList();
        if(JLJS.isPcSite()){
            var $targetModal = this.airportTablistModal;
            this.closeAirportSelect($(this.WRAP));
            this.openModal($targetModal);
            JLJS_base.preventTabbing($targetModal,$targetModal.find('.JS_jalSearchModalClose'),true);
            this.setupTablistMdlPanels();
        }else{
            this.$flyingInputLayer02.removeClass('dis-hide');
            this.$depValAirSP.addClass('dis-hide');
            this.$arrValAirSP.addClass('dis-hide');
        }

        this.toggleAirportListTab(type);

        this.$dominterAirportListCloseBtn.addClass('dis-hide');
        this.$domInterAirportListBackBtn.removeClass('dis-hide');
    },

    setupTablistMdlPanels : function(){
        $('#JS_domAreaSelectTabList').find('a:first').attr('tabindex','-1').attr('aria-selected','true');
        $('#JS_domMdlCityItems').find('ul:first').attr('aria-hidden','false');
        this.$interAreaSelectTablist.find('a:first').attr('tabindex','-1').attr('aria-selected','true');
        this.$interAreaSelectTablist.find('li.non-list').find('a').attr('tabindex','-1');
        $('#JS_interMdlCityItems').find('li:first').attr('aria-hidden','false');
    },

    toggleAirportListTab : function(type){
        var $domPanel;
        var $interPanel;
        var $domTab;
        var $interTab;

        if(JLJS.isPcSite()){
            $domPanel = $('.JS_domAirTabPanel');
            $interPanel = $('.JS_interAirTabPanel');
            $domTab = $('#JS_domAirListMdlTab');
            $interTab = $('#JS_interAirListMdlTab');
            $('#JS_domIntl_airportListMdlWrapper').attr('data-airportMdl-select',type);
        } else {
            $domPanel = this.$domAirportList;
            $interPanel = this.$interAirportList;
            $domTab = this.$domAirportListTab;
            $interTab = this.$interAirportListTab
            this.$domInterAirportListTabBase.removeClass('dis-hide').attr('data-airport-select', type);
        }

        if(type === 'dom') {
            if(!JLJS.isPcSite()){
                $domPanel.removeClass('dis-hide');
                $interPanel.addClass('dis-hide');
            }
            $domPanel.attr('aria-hidden', false);
            $interPanel.attr('aria-hidden', true);
            $domTab.find('a').attr('aria-selected', true);
            $interTab.find('a').attr('aria-selected', false);
        } else {
            if(!JLJS.isPcSite()){
                $domPanel.addClass('dis-hide');
                $interPanel.removeClass('dis-hide');
            }
            $domPanel.attr('aria-hidden', true);
            $interPanel.attr('aria-hidden', false);
            $domTab.find('a').attr('aria-selected', false);
            $interTab.find('a').attr('aria-selected', true);
        }
    },

    setSpecificInfo : function(){
        if(this.domInter === 'dom'){
            this.$domPromo.removeClass('dis-hide').attr('aria-hidden','false');
            this.$interTransitPromo.addClass('dis-hide').attr('aria-hidden','true');
            var depDate = new Date(this.submitData['JS_departureYear'], this.submitData['JS_departureMonth'] -1, this.submitData['JS_departureDay']);
            var arrDate = (this.submitData['JS_departureYear2']) ? new Date(this.submitData['JS_departureYear2'], 	this.submitData['JS_departureMonth2'] -1, this.submitData['JS_departureDay2']) : '';

            if(this.submitData['JS_departureLocation'] && this.submitData['JS_arrivalLocation'] &&
                arrDate && depDate.getTime() == arrDate.getTime() &&
                this.submitData['JS_departureLocation'] !== this.submitData['JS_arrivalLocation'] &&
                this.submitData['JS_pattern'] !== 'oneway'){
                var linkHtml = this.DOM_SPECIFIC_INFO.ONEDAY_PROMO;
                this.$domDayTripPromo.html(linkHtml);
                this.$domDayTripPromo.attr('aria-hidden','false').removeClass('dis-hide');
            }else{
                this.$domDayTripPromo.attr('aria-hidden','true').addClass('dis-hide');
            }
        }else if(this.domInter === 'inter' && Object.keys(JLJS_interSpecificInfo).length !== 0){
            this.$domPromo.addClass('dis-hide').attr('aria-hidden','true');
            this.$domDayTripPromo.addClass('dis-hide').attr('aria-hidden','true');
            if(this.submitData['JS_departureLocation'] && this.submitData['JS_arrivalLocation'] && this.submitData['JS_departureLocation'] !== this.submitData['JS_arrivalLocation']){
                this.$interTransitPromo.attr('aria-hidden','false').removeClass('dis-hide');
                this.$interTransitPromo.find('li').html(JLJS_interSpecificInfo.WARNING_LABEL);
            }else{
                this.$interTransitPromo.attr('aria-hidden','true').addClass('dis-hide');
            }
        }
    },

    airportListTabsClickCount : function(label){
        var category = this.AIRPORT_LIST_TAB_CHANGE_GTM_PARAM.FIRST;
        var isDep = ($(this.WRAP).attr('JS_DepOrArr')==='dep');
        var actionParam = this.AIRPORT_LIST_TAB_CHANGE_GTM_PARAM.SECOND;
        var action = isDep ? actionParam.DEPARTURE
            : actionParam.ARRIVAL;
        JLJS_analysisCommon.pushGtmClickEvent(category,action,label);
    },

    isShowSuggest : function() {
        return this.$suggestArea.is(':visible');
    },

    inSuggestScroll : function($row) {
        var diffPosition = $row.offset().top - this.$tmplWrap.offset().top;
        var wrapScroll = this.$tmplWrap.scrollTop();
        var wrapHeight = this.$tmplWrap.height();
        var rowHeight = $row.outerHeight();

        var additionSpHeight = 0;

        if(!JLJS.isPcSite()) {
            if($row.is(this.$suggestArea.find('a:first'))){
                this.$tmplWrap.scrollTop(0);
                return;
            }
            var titleHeight = this.$areaSelectTtlSP.outerHeight();
            var inputHeight = this.$areaSelectInputSP.outerHeight();
            additionSpHeight = titleHeight + inputHeight;
        }
        if(0 > diffPosition) {
            this.$tmplWrap.scrollTop(wrapScroll + diffPosition);
        } else if(diffPosition + rowHeight > wrapHeight) {
            this.$tmplWrap.scrollTop(wrapScroll + diffPosition - wrapHeight + rowHeight);
        }
    },

    inSuggestDown : function() {
        this.inSuggestUpDown(false);
    },

    inSuggestUp : function() {
        this.inSuggestUpDown(true);
    },

    inSuggestUpDown : function(isUp) {
        var _this = this;
        var $aList = this.$suggestArea.find('a');
        var $current = $aList.filter(function(){
            return $(this).hasClass(_this.CLS_SUGGEST_SELECT);
        });
        var $nextTarget;

        if($current.length === 0 ){
            if(!isUp){
                var $nextTarget = $aList.first();
                $nextTarget.addClass(this.CLS_SUGGEST_SELECT);
                this.addAccessibleReadMessage($nextTarget.text());
            }
            return;
        }

        var $wrapLi = $current.parent();

        $nextTarget = isUp ? $wrapLi.prev().find('a') : $wrapLi.next().find('a');

        if($nextTarget.length === 0) {
            $nextTarget = isUp ?  $aList.last() : $aList.first();
        }

        $current.removeClass(this.CLS_SUGGEST_SELECT);
        $nextTarget.addClass(this.CLS_SUGGEST_SELECT);
        this.addAccessibleReadMessage($nextTarget.text());
        this.inSuggestScroll($nextTarget);
    },

    addAccessibleReadMessage : function(msg){
        JLJS_accessibleUtilControl.addAccessibleReadMessage(msg);
    },

    readAllErrorMessage : function(){
        var errMsg = this.errorElmMap.$all.filter(':visible').text();
        this.addAccessibleReadMessage(errMsg);
    },

    directOpenCityList : function(depOrArr){
        $(this.WRAP).attr('JS_DepOrArr',depOrArr);
        this.appendAirportList();
        var $mdl = this.airportTablistModal;
        this.openModal($mdl);
        JLJS_base.preventTabbing($mdl,$mdl.find('.JS_jalSearchModalClose'),true);
        this.setupTablistMdlPanels();
        this.toggleAirportListTab('dom');
    },

    airInputValBlurHandler : function(e){
        var $deleteBtn = $(e.target).siblings('.JS_domIntl_selectDelete');
        if($(e.relatedTarget).is($deleteBtn)
            || ((!e.relatedTarget) && $(document.activeElement).is($deleteBtn))
            || ($.inArray($deleteBtn[0],$(':hover')) != -1)){
            return false;
        }
        $deleteBtn.attr('aria-hidden','true');
    },

    appendAirportList : function(){
        var airportWrapState = $(this.WRAP).attr('js_deporarr');
        var isDep = (airportWrapState === 'dep');
        this.JLJS_domIntl_aiportSelectControl.dispAreaDomInterLi(isDep);
    },

    showAriaElm : function($jqElm){
        $jqElm.removeClass('dis-hide').attr('aria-hidden','false');
    },

    hideAriaElm : function($jqElm){
        $jqElm.addClass('dis-hide').attr('aria-hidden','true');
    },

    setupEvent : function(){
        var _this = this;
        var isTouch = false;
        var touchInfo = null;
        var currentTouchInfo = null;

        this.$moduleClose.on({
            'touchstart mousedown': _touchStart,
            'touchmove': _touchMove,
            'touchend click': function(e) {
                if(_isTouched(e)) { return; }
                if(e.type === 'touchend' && touchInfo.pageY !== currentTouchInfo.pageY) { return; }
                _this.closeSearchComponent();
            }
        });

        $('#JS_linkSeatButton').on({
            'touchstart mousedown': _touchStart,
            'touchmove': _touchMove,
            'click touchend': function(e){
                e.stopPropagation();
                if(_isTouched(e)) { return; }
                if(e.type === 'touchend' && touchInfo.pageY !== currentTouchInfo.pageY) { return; }
                $('#JS_categoryTopTab').find('li').first().find('span').click();
                _this.openSearchComponent();
            }
        });

        $('.JS_domIntl_dispSearchSwitch button').on({
            'touchstart mousedown': _touchStart,
            'touchmove': _touchMove,
            'click touchend': function(e){
                e.stopPropagation();
                if(_isTouched(e)) { return; }
                if(e.type === 'touchend' && touchInfo.pageY !== currentTouchInfo.pageY) { return; }
                var $this = $(this);
                var thisId = $this.parent().attr('id');
                var $not;
                var cookieId = null;
                if(thisId === 'JS_domIntl_oneWay'){
                    _this.$JS_domIntl_dataSearchType.attr('data-search-type', 'oneway');
                    _this.submitData['JS_pattern'] = 'oneway';
                    if(_this.domInter === 'dom'){
                        _this.$domDayTripPromo.attr('aria-hidden','true')
                            .addClass('dis-hide');
                    }
                    $not = $('#JS_domIntl_roundTrip,#JS_domIntl_multiCity');
                    cookieId = 'JS_domIntl_oneWay';
                    _this.$JS_domInterOnewayCheck.prop('checked', true);
                    JLJS_analysisCommon.pushGtmClickEvent('[共通 F&S]モジュール', '往復片道切替', '片道タブ');
                } else if(thisId === 'JS_domIntl_roundTrip'){
                    _this.$JS_domIntl_dataSearchType.attr('data-search-type', 'roundtrip');
                    _this.submitData['JS_pattern'] = 'roundtrip';
                    if(_this.domInter === 'dom'){
                        _this.setSpecificInfo();
                    }
                    $not = $('#JS_domIntl_oneWay,#JS_domIntl_multiCity');
                    cookieId = 'JS_domIntl_roundTrip';
                    _this.$JS_domInterOnewayCheck.prop('checked', false);
                    JLJS_analysisCommon.pushGtmClickEvent('[共通 F&S]モジュール', '往復片道切替', '往復タブ');
                } else if(thisId === 'JS_domIntl_multiCity') {
                    _this.$JS_domIntl_dataSearchType.attr('data-search-type', 'multicity');
                    _this.submitData['JS_pattern'] = '';
                    $not = $('#JS_domIntl_roundTrip,#JS_domIntl_oneWay');
                    _this.$JS_domInterOnewayCheck.prop('checked', false);
                }
                if(cookieId !== null) {
                    JLJS_CookieMgr.setMultiCookie(_this.CK_CITY_SELECT, {city : cookieId});
                }
                $this.attr('aria-current',true);
                $not.find('button').attr('aria-current',false);
            }
        });

        this.$depLbAir.on({
            'touchstart mousedown': _touchStart,
            'touchmove': _touchMove,
            'click touchend': function(e){
                //if(!JLJS.isPcSite() && e.type === 'click') return;
                e.stopPropagation();
                if(_isTouched(e)) { return; }
                if(e.type === 'touchend' && touchInfo.pageY !== currentTouchInfo.pageY) { return; }
                $this = this;
                var $elm = _this.$depValAir;
                for(var i = 0; i < 2; i++){
                    var isNone = i === 0? '' : 'none';
                    $('#JS_domIntl_areaSelectTtlSP').find('span')[i].style.display = isNone;
                    $('#JS_domIntl_areaSelectInputSP').find('div')[i].style.display = isNone;
                }
                _this.$depValAirSP.val(_this.$depValAir.val());
                if(!JLJS.isPcSite()){
                    $elm = _this.$depValAirSP;
                    $elm.height(0);
                }
                //if($('#JS_moduleOverlay').css('display') === 'none') _this.openSearchComponent($elm, 'dep', $this);
                if($('#JS_moduleOverlay').css('display') === 'none') _this.openSearchComponent($elm, 'dep', $this);
                else _this.clickInputAir($elm, 'dep', $this);
                isTouch = false;
            },
            'keydown': function(e) {
                if(e.which === 13) {
                    if(!JLJS.isPcSite()){
                        this.click();
                    }
                    return false;
                }else if(e.which === 27) {
                    if($(_this.WRAP).css('display') === 'none') { return; }
                    _this.closeAirportSelect($(_this.WRAP));
                    $(this).focus();
                }

            }
        });

        this.$arrLBAir.on({
            'touchstart mousedown': _touchStart,
            'touchmove': _touchMove,
            'click touchend': function(e){
                //if(!JLJS.isPcSite() && e.type === 'click') return;
                e.stopPropagation();
                if(_isTouched(e)) { return; }
                if(e.type === 'touchend' && touchInfo.pageY !== currentTouchInfo.pageY) { return; }
                $this = this;
                //_this.openSearchComponent(_this.$arrValAir, 'arr', $this);
                var $elm = _this.$arrValAir;
                for(var i = 0; i < 2; i++){
                    var isNone = i === 1? '' : 'none';
                    $('#JS_domIntl_areaSelectTtlSP').find('span')[i].style.display = isNone;
                    $('#JS_domIntl_areaSelectInputSP').find('div')[i].style.display = isNone;
                }
                _this.$arrValAirSP.val(_this.$arrValAir.val());
                if(!JLJS.isPcSite()){
                    $elm = _this.$arrValAirSP;
                    $elm.height(0);
                }

                //if($('#JS_moduleOverlay').css('display') === 'none') _this.openSearchComponent($elm, 'arr', $this);
                if($('#JS_moduleOverlay').css('display') === 'none') _this.openSearchComponent($elm, 'arr', $this);
                else _this.clickInputAir($elm, 'arr', $this);
                isTouch = false;
            },
            'keydown': function(e) {
                if(e.which === 13) {
                    if(!JLJS.isPcSite()){
                        this.click();
                    }
                    return false;
                }else if(e.which === 27) {
                    if($(_this.WRAP).css('display') === 'none') { return; }
                    _this.closeAirportSelect($(_this.WRAP));
                    $(this).focus();
                }
            }
        });

        this.$depLbAir.find('.JS_domIntl_selectDelete').on({
            'touchstart mousedown': _touchStart,
            'touchmove': _touchMove,
            'click touchend': function(e){
                e.stopPropagation();
                if(_isTouched(e)) { return; }
                if(e.type === 'touchend' && touchInfo.pageY !== currentTouchInfo.pageY) { return; }
                _this.$depValAir.val('');
                _this.$depValAirSpLabel.html('');
                _this.$depValAir.attr('disp', '');
                _this.$depValAir.attr('market', '');
                _this.$depValAir.attr('cityName', '');
                _this.$depValAir.attr('cityCode', '');
                _this.$depValAir.attr('airportName', '');
                _this.$depValAir.attr('domInter', '');
                _this.$depValAir.attr('countryCode', '');
                _this.submitData['JS_departureLocation'] = '';
                _this.submitData['JS_arrivalLocation2'] = '';
                _this.submitData['JS_countrySite'] = '';
                _this.judgeDomInter(false, 'DEFAULT');
                _this.submitData['JS_departureArea'] = '';
                _this.submitData['JS_arrivalArea2'] = '';
                //_this.checkArea();
                _this.setSpecificInfo();
                _this.dispInterClass();

                if(_this.$tmplWrap.is(':hidden')) {
                    _this.$depLbAir.click();
                } else {
                    _this.$depValAir.focus();
                }
            },
            'keydown': function(e) {
                if(e.which === 13) {
                    e.stopPropagation();
                    $(this).click();
                }
            },
            'blur':function(){
                $(this).attr('aria-hidden','true');
            }
        });

        this.$arrLBAir.find('.JS_domIntl_selectDelete').on({
            'touchstart mousedown': _touchStart,
            'touchmove': _touchMove,
            'click touchend': function(e){
                e.stopPropagation();
                if(_isTouched(e)) { return; }
                if(e.type === 'touchend' && touchInfo.pageY !== currentTouchInfo.pageY) { return; }
                $(_this.$arrValAir).val('');
                $(_this.$arrValAirSpLabel).html('');
                $(_this.$arrValAir).attr('disp', '');
                $(_this.$arrValAir).attr('market', '');
                $(_this.$arrValAir).attr('cityName', '');
                $(_this.$arrValAir).attr('cityCode', '');
                $(_this.$arrValAir).attr('airportName', '');
                $(_this.$arrValAir).attr('domInter', '');
                $(_this.$arrValAir).attr('countryCode', '');
                _this.submitData['JS_arrivalLocation'] = '';
                _this.submitData['JS_departureLocation2'] = '';
                //_this.judgeDomInter(false);
                _this.submitData['JS_departureArea2'] = '';
                _this.submitData['JS_arrivalArea'] = '';
                //_this.checkArea();
                _this.setSpecificInfo();
                _this.dispInterClass();
                if(_this.$tmplWrap.is(':hidden')) {
                    _this.$arrLBAir.click();
                } else {
                    _this.$arrValAir.focus();
                }
            },
            'keydown': function(e) {
                if(e.which === 13) {
                    e.stopPropagation();
                    $(this).click();
                }
            },
            'blur':function(){
                $(this).attr('aria-hidden','true');
            }
        });

        this.$depValAir.on({
            'input': function(){
                if(_this.$dispSearchComponent.hasClass('dis-hide')) {
                    JLJS_moduleControl.openSearchComponent();
                }
                _this.suggestSearch(_this.$depValAir, _this.$depLbAir, false, 'dep');
            },
            'focus': function() {
                $(this).select();
                if($(this).val().length){
                    $(this).siblings('.JS_domIntl_selectDelete').attr('aria-hidden','false');
                }else{
                    $(this).siblings('.JS_domIntl_selectDelete').attr('aria-hidden','true');
                }
            },
            'blur': function(e){
                _this.airInputValBlurHandler(e);
            },
            'keydown': function(e){
                if(e.which === 13){
                    if(!(_this.$tmplWrap.is(':visible'))) {
                        this.click();
                    }
                    e.stopPropagation();
                    var $keySelectedSuggestCity = _this.$suggestArea.find('.'+_this.CLS_SUGGEST_SELECT);
                    var isSuggestSeletedByKey = ($keySelectedSuggestCity.length > 0);
                    if(_this.isShowSuggest() && isSuggestSeletedByKey){
                        $keySelectedSuggestCity.trigger('click');
                    }else{
                        _this.selectArea(this, true);
                    }
                    _this.dispInterClass();
                } else if(e.which === 38) {
                    if(_this.isShowSuggest()){
                        _this.inSuggestUp();
                        return false;
                    }
                } else if(e.which === 40){
                    if(_this.isShowSuggest()){
                        _this.inSuggestDown();
                        return false;
                    } else {
                        $(_this.WRAP).find('a,[role="button"]').first().focus();
                    }
                } else if(e.which === 9) {
                    if(e.shiftKey && $(_this.WRAP).css('display') !== 'none') {
                        _this.closeAirportSelect($(_this.WRAP));
                    }
                }
            }
        });

        this.$arrValAir.on({
            'input': function(){
                if(_this.$dispSearchComponent.hasClass('dis-hide')) {
                    JLJS_moduleControl.openSearchComponent();
                }
                _this.suggestSearch(_this.$arrValAir, _this.$arrLBAir, true, 'arr');
            },
            'focus': function() {
                $(this).select();
                if($(this).val().length){
                    $(this).siblings('.JS_domIntl_selectDelete').attr('aria-hidden','false');
                }else{
                    $(this).siblings('.JS_domIntl_selectDelete').attr('aria-hidden','true');
                }
            },
            'blur': function(e){
                _this.airInputValBlurHandler(e);
            },
            'keydown': function(e){
                if(e.which === 13){
                    if(!(_this.$tmplWrap.is(':visible'))) {
                        this.click();
                    }
                    e.stopPropagation();
                    var $keySelectedSuggestCity = _this.$suggestArea.find('.'+_this.CLS_SUGGEST_SELECT);
                    var isSuggestSeletedByKey = ($keySelectedSuggestCity.length > 0);
                    if(_this.isShowSuggest() && isSuggestSeletedByKey){
                        $keySelectedSuggestCity.trigger('click');
                    }else{
                        _this.selectArea(this, true);
                    }
                    _this.dispInterClass();
                } else if(e.which === 38) {
                    if(_this.isShowSuggest()){
                        _this.inSuggestUp();
                        return false;
                    }
                } else if(e.which === 40){
                    if(_this.isShowSuggest()){
                        _this.inSuggestDown();
                        return false;
                    } else {
                        $(_this.WRAP).find('a,[role="button"]').first().focus();
                    }
                } else if(e.which === 9) {
                    if(e.shiftKey && $(_this.WRAP).css('display') !== 'none') {
                        _this.closeAirportSelect($(_this.WRAP));
                    }
                }
            }
        });

        this.$depValAirSP.on({
            'input': function(e){

                if(_this.$tmplWrap.is(':hidden')){return;}
                _this.suggestSearch($(this), _this.$depLbAir, false, 'dep');
                _this.adjustTextAreaHeight($(this));
            },
            'focus': function() {
                _this.adjustTextAreaHeight($(this));
                $(this).select();
            },
            'keydown': function(e){
                if(e.which === 13){
                    var $keySelectedSuggestCity = _this.$suggestArea.find('.'+_this.CLS_SUGGEST_SELECT);
                    var isSuggestSeletedByKey = ($keySelectedSuggestCity.length > 0);
                    if(_this.isShowSuggest() && isSuggestSeletedByKey){
                        $keySelectedSuggestCity.trigger('click');
                    }else{
                        _this.selectArea(this, true);
                    }
                    _this.dispInterClass();
                }else if(e.which === 38) {
                    if(_this.isShowSuggest()){
                        _this.inSuggestUp();
                        return false;
                    }
                }else if(e.which === 40){
                    if(_this.isShowSuggest()){
                        _this.inSuggestDown();
                        return false;
                    }
                }else if(e.which === 27) {
                    if($(_this.WRAP).css('display') !== 'none') {
                        e.preventDefault();
                        _this.closeAirportSelect($(_this.WRAP));
                        return false;
                    }
                }
            }
        });

        this.$arrValAirSP.on({
            'input': function(e){
                if(_this.$tmplWrap.is(':hidden')){return;}
                _this.suggestSearch($(this), _this.$arrLBAir, true, 'arr');
                _this.adjustTextAreaHeight($(this));
            },
            'focus': function() {
                _this.adjustTextAreaHeight($(this));
                $(this).select();
            },
            'keydown': function(e){
                if(e.which === 13){
                    var $keySelectedSuggestCity = _this.$suggestArea.find('.'+_this.CLS_SUGGEST_SELECT);
                    var isSuggestSeletedByKey = ($keySelectedSuggestCity.length > 0);
                    if(_this.isShowSuggest() && isSuggestSeletedByKey){
                        $keySelectedSuggestCity.trigger('click');
                    }else{
                        _this.selectArea(this, true);
                    }
                    _this.dispInterClass();
                }else if(e.which === 38) {
                    if(_this.isShowSuggest()){
                        _this.inSuggestUp();
                        return false;
                    }
                }else if(e.which === 40){
                    if(_this.isShowSuggest()){
                        _this.inSuggestDown();
                        return false;
                    }
                }else if(e.which === 27) {
                    if($(_this.WRAP).css('display') !== 'none') {
                        e.preventDefault();
                        _this.closeAirportSelect($(_this.WRAP));
                        return false;
                    }
                }
            }
        });

        var airportListTabParam = this.AIRPORT_LIST_TAB_CHANGE_GTM_PARAM.THIRD;
        var $toDomAirportList = $('#JS_toDomAirportList');
        $toDomAirportList.on('click', function() {
            _this.changeAirportListTab('dom');
            var labelParam = airportListTabParam.ENTRANCE.DOM;
            _this.airportListTabsClickCount(labelParam);
        });
        this.$domAirportListTab.on('click', function() {
            _this.changeAirportListTab('dom');
            var labelParam = airportListTabParam.RADIO_TAB.DOM;
            _this.airportListTabsClickCount(labelParam);
        });

        var $toInterAirportList = $('#JS_toInterAirportList');
        $toInterAirportList.on('click', function() {
            _this.changeAirportListTab('inter');
            var labelParam = airportListTabParam.ENTRANCE.INTER;
            _this.airportListTabsClickCount(labelParam);
        });
        this.$interAirportListTab.on('click', function() {
            _this.changeAirportListTab('inter');
            var labelParam = airportListTabParam.RADIO_TAB.INTER;
            _this.airportListTabsClickCount(labelParam);
        });

        $('.JS_airListMdlTab').on('click',function(){
            var type = $(this).attr('data-district');
            _this.toggleAirportListTab(type);
            var labelParam = (type == 'dom') ? airportListTabParam.RADIO_TAB.DOM
                : airportListTabParam.RADIO_TAB.INTER;
            _this.airportListTabsClickCount(labelParam);
        });

        $('#JS_domAreaSelectTabList,#JS_interAreaSelectTabList').on('click','.JS_areaSelectTab',function(e){
            e.stopPropagation();
            $(this).attr('tabindex','-1').attr('aria-selected','true');
            $(this).parent().siblings().not('.non-list').find('a').attr('tabindex','0').attr('aria-selected','false');
            var id = $(this).attr('aria-controls');
            var $subPanel = $('#'+id);
            $subPanel.attr('aria-hidden','false');
            $subPanel.siblings().attr('aria-hidden','true');
            $subPanel.find('a').first().focus();
            var analyticsData = $(this).attr('data-open_analytics');
            if(analyticsData) {
                var dataArray = analyticsData.split(',');
                JLJS_analysisCommon.pushGtmClickEvent(dataArray[0], dataArray[1], dataArray[2]);
            }
        });

        this.$domInterAirportListBackBtn.on('click', function() {
            _this.$flyingInputLayer01.removeClass('dis-hide');
            _this.$flyingInputLayer02.addClass('dis-hide');
            _this.$domInterAirportListTabBase.addClass('dis-hide')
            _this.$dominterAirportListCloseBtn.removeClass('dis-hide');
            _this.$domInterAirportListBackBtn.addClass('dis-hide');

            if(!JLJS.isPcSite()) {
                _this.$depValAirSP.removeClass('dis-hide');
                _this.$arrValAirSP.removeClass('dis-hide');
            }
        });

        $(document).on({
            'touchstart mousedown': _touchStart,
            'touchmove': _touchMove,
            'click touchend': function(e){
                e.stopPropagation();
                if(_isTouched(e)) { return; }
                if(e.type === 'touchend' && touchInfo.pageY !== currentTouchInfo.pageY) { return; }
                if(JLJS_tabControl.getTarget() !== 'domIntl') return;
                _this.selectArea(this, false);
                _this.dispInterClass();

                return false;
            }
        }, '#JS_domIntl_reservSelectorWrap .candidate-item');

        $('#JS_domMdlCityItems,#JS_interMdlCityItems').on('click','.candidate-item',function(e){
            e.stopPropagation();
            _this.selectArea(this, false);
            _this.checkArea();
            _this.dispInterClass();
            _this.airportTablistModal.find('.JS_jalSearchModalClose').trigger('click');
        })

        $('.JS_cityTabListDispBtn').on({
            'click': function(e){
                e.stopPropagation();
                if($(_this.WRAP).css('display')==='block'){
                    _this.closeAirportSelect($(_this.WRAP));
                }
                var depOrArr = $(this).data('deporarr');
                if(_this.$dispSearchComponent.hasClass('dis-hide')) {
                    JLJS_moduleControl.openSearchComponent(_this.directOpenCityList(depOrArr));
                }else{
                    _this.directOpenCityList(depOrArr);
                }
            },
            'keydown' : function(e){
                if(e.which === 13) {
                    e.stopPropagation();
                    $(this).click();
                } else if(e.which === 9) {
                    if(e.shiftKey) { return; }
                    var $suggest = $(_this.WRAP).find('[data-content="JS-suggest"]');
                    var isSuggest = $suggest.css('display') === 'none' ? false : true;
                    var isShowLayer01 = _this.$flyingInputLayer01.hasClass('dis-hide') ? false : true;
                    var isShowAreaSelect = _this.$flyingInputLayer02.hasClass('dis-hide') ? false : true;
                    var isDisp = $(_this.WRAP).css('display')==='block';

                    if(isDisp) {
                        if(isSuggest && $suggest.find('a').length > 0) {
                            return;
                        } else if(isShowLayer01) {
                            _this.$flyingInputLayer01.find('a,[role="button"]').first().focus();
                            return false;
                        } else if(isShowAreaSelect) {
                            _this.$flyingInputLayer02.find('a,[role="button"]').first().focus();
                            return false;
                        } else {
                            _this.closeAirportSelect($(_this.WRAP));
                            return true;
                        }
                    } else {
                        return true;
                    }
                }
            }
        });

        this.$depDate.on({
            'touchstart mousedown': _touchStart,
            'touchmove': _touchMove,
            'click touchend': function(e){
                e.stopPropagation();
                if(_isTouched(e)) { return; }
                if(e.type === 'touchend' && touchInfo.pageY !== currentTouchInfo.pageY) { return; }
                if($('#JS_dispCalendar').css('display') !== 'none')_this.closeModal();
                var oneWay = _this.$JS_domIntl_dataSearchType.attr('data-search-type') === 'oneway' ? true : false;
                $('#JS_dispCalendar').attr('data-content', 'JS_domIntl_calDate');
                JLJS_CalNav.setCal.depOrArr = 'dep';
                if(_this.domInter === 'dom') {
                    var addStartDate = 0;
                    var endMonthNum = 11;
                    var endDateNum = JLJS_CalNav.setCal.getDateDiff(addStartDate,endMonthNum);
                    JLJS_CalNav.setCal.setLowFareCalendar(false, 0, 330, 330, 0, 12, false, true);
                } else {
                    JLJS_CalNav.setCal.setCalendar(false, 0, 360, 360, 0, 14);
                }
                JLJS_CalNav.setCal.createCalendar();

                if(!_this.submitData['JS_departureYear']) {
                    JLJS_CalNav.setCal.resetDate();
                    $('#JS_dispCalendar').find('a,button:not([disabled="disabled"])').first().focus();
                }
                else{
                    $('#' + $(this).attr('depdate-id')).click().focus();
                    if(!oneWay && _this.submitData['JS_departureYear2']) $('#' + $(this).attr('arrdate-id')).click().focus();
                }
                if(JLJS_CalNav.setCal.isPcSite()){
                    JLJS_CalNav.setCal.dispCalendar(e, this, oneWay);
                }else{
                    JLJS_CalNav.setCal.dispCalendar(e, $('#JS_domIntl_searchComponent'), oneWay);
                }
                _this.openModal($('#JS_dispCalendar'));
                _this.lowFareControl.openModal(_this.submitData);
                return false;
            },
            'keydown': function(e) {
                if(e.which === 13) {
                    $(this).click();
                }

            }
        });

        this.$arrDate.on({
            'touchstart mousedown': _touchStart,
            'touchmove': _touchMove,
            'click touchend': function(e){
                e.stopPropagation();
                if(_isTouched(e)) { return; }
                if(e.type === 'touchend' && touchInfo.pageY !== currentTouchInfo.pageY) { return; }
                if($('#JS_dispCalendar').css('display') !== 'none')_this.closeModal();
                var oneWay = _this.$JS_domIntl_dataSearchType.attr('data-search-type') === 'oneway' ? true : false;
                $('#JS_dispCalendar').attr('data-content', 'JS_domIntl_calDate');
                JLJS_CalNav.setCal.depOrArr = 'dep';
                if(_this.domInter === 'dom') {
                    var addStartDate = 0;
                    var endMonthNum = 11;
                    var endDateNum = JLJS_CalNav.setCal.getDateDiff(addStartDate,endMonthNum);
                    JLJS_CalNav.setCal.setLowFareCalendar(false, 0, 330, 330, 0, 12, false, true);
                } else {
                    JLJS_CalNav.setCal.setCalendar(false, 0, 360, 360, 0, 14);
                }
                JLJS_CalNav.setCal.createCalendar();
                if(!_this.submitData['JS_departureYear']) JLJS_CalNav.setCal.resetDate();
                else{
                    $('#' + _this.$depDate.attr('depdate-id')).click();
                    if(!oneWay && _this.submitData['JS_departureYear2']) $('#' + $(this).attr('arrdate-id')).click();
                }
                if(JLJS_CalNav.setCal.isPcSite()){
                    JLJS_CalNav.setCal.dispCalendar(e, this, oneWay);
                }else{
                    JLJS_CalNav.setCal.dispCalendar(e, $('#JS_domIntl_searchComponent'), oneWay);
                }
                _this.openModal($('#JS_dispCalendar'));
                _this.lowFareControl.openModal(_this.submitData);
                return false;
            },
            'keydown': function(e) {
                if(e.which === 13) {
                    $(this).click();
                }
            }
        });


        $('#JS_calConfirmButton').on({
            'touchstart mousedown': _touchStart,
            'touchmove': _touchMove,
            'click touchend': function(e){
                e.stopPropagation();
                if(_isTouched(e)) { return; }
                if(e.type === 'touchend' && touchInfo.pageY !== currentTouchInfo.pageY) { return; }
                if($('#JS_dispCalendar').attr('data-content') !== 'JS_domIntl_calDate') return;
                var values = JLJS_CalNav.setCal.getDateValue();

                var depDate = values['JS_departureYear'] ? new Date(values['JS_departureYear'], values['JS_departureMonth'] -1, values['JS_departureDay']) : '';
                var arrDate = values['JS_arrivalYear'] ? new Date(values['JS_arrivalYear'], values['JS_arrivalMonth'] -1, values['JS_arrivalDay']) : '';
                if(!_this.checkValiMdlDate(depDate, arrDate)){return false;}
                _this.createDateElm(depDate, arrDate);
                _this.submitData['JS_departureYear'] = values['JS_departureYear'];
                _this.submitData['JS_departureMonth'] =  values['JS_departureMonth'];
                _this.submitData['JS_departureDay'] = values['JS_departureDay'];
                _this.submitData['JS_departureDate'] = _this.getIntSubmitDate('dep1');
                if(values['JS_departureMonth']){
                    _this.submitData['JS_departureYear2'] = values['JS_arrivalYear'];
                    _this.submitData['JS_departureMonth2'] =  values['JS_arrivalMonth'];
                    _this.submitData['JS_departureDay2'] = values['JS_arrivalDay'];
                    _this.submitData['JS_departureDate2'] =  _this.getIntSubmitDate('dep2');
                }else{
                    _this.submitData['JS_departureYear2'] = '';
                    _this.submitData['JS_departureMonth2'] =  '';
                    _this.submitData['JS_departureDay2'] = '';
                    _this.submitData['JS_departureDate2'] = '';
                }
                _this.setSpecificInfo();
                _this.closeModal();

                _this.$arrDate.focus();

                if (_this.domInter === 'dom') {
                    var changeDisp = function (classInfo) {
                        if (_this.isOverSwitchDate(depDate) && _this.$discountTypeDiv.hasClass('dis-hide')) {
                            _this.$discountTypeDiv.removeClass('dis-hide');
                        } else if (!_this.isOverSwitchDate(depDate) && !_this.$discountTypeDiv.hasClass('dis-hide')) {
                            _this.$discountTypeDiv.addClass('dis-hide');
                        }

                        var classLabel = {
                            label: classInfo[0].label,
                            val: classInfo[0].val
                        };
                        $(_this.$seatCls).find('span').text(classLabel.label);
                        _this.submitData['JS_cff'] = classLabel.val;
                        _this.JLJS_domIntl_selectControl.setup(classInfo);
                        _this.changeDispClass();
                        _this.dispPassenger();
                        _this.beforeDepDate = _this.getBoardingDate('departure');
                    };

                    if (!_this.isOverSwitchDate(depDate) && _this.isOverSwitchDate(arrDate)) {
                        changeDisp(_this.CLASS_SET.dom);
                        setTimeout(function () {
                            _this.openModal($('#JS_domIntl_packageAlert'));
                        }, 500);
                        return;
                    }

                    if ((!_this.isOverSwitchDate(_this.beforeDepDate) && !_this.isOverSwitchDate(depDate))
                        || (_this.isOverSwitchDate(_this.beforeDepDate) && _this.isOverSwitchDate(depDate))) {
                        return;
                    }

                    if (_this.isOverSwitchDate(depDate)) {
                        changeDisp(_this.CLASS_SET.domNew);
                    } else {
                        changeDisp(_this.CLASS_SET.dom);
                    }
                }
            }
        });

        this.$selectNum.on({
            'touchstart mousedown': _touchStart,
            'touchmove': _touchMove,
            'click touchend': function(e){
                e.stopPropagation();
                e.preventDefault();
                if(_isTouched(e)) { return; }
                if(e.type === 'touchend' && touchInfo.pageY !== currentTouchInfo.pageY) { return; }
                if($('#JS_domIntl_packagePassenger').css('display') !== 'none')_this.closeModal();
                var passenInfo = _this.JLJS_domIntl_passengerControl.info;
                var info = {};
                for(var i = 0; i < passenInfo.length; i++){
                    var id = passenInfo[i]['code'];
                    if(id.indexOf('Adult') !== -1){
                        info[id] = _this.submitData['JS_nbAdt'];
                    }else if(id.indexOf('Youth') !== -1){
                        var youth = _this.submitData['JS_nbYadt'];
                        if(youth === '') {
                            youth = 0;
                        }
                        info[id] = youth;
                    }else if(id.indexOf('Child') !== -1){
                        info[id] = _this.submitData['JS_nbChd'];
                    }else{
                        info[id] = _this.submitData['JS_nbInf'];
                    }
                }
                _this.JLJS_domIntl_passengerControl.resetup(info);
                _this.hideAriaElm($('#JS_domIntl_packagePassenger').find('.JS_errorTextElm'));
                _this.openModal($('#JS_domIntl_packagePassenger'));
                JLJS_base.preventTabbing($('#JS_domIntl_packagePassenger'),$('#JS_domIntl_packagePassenger,#JS_domIntl_packagePassenger .JS_jalSearchModalClose'),true);

            },
            'keydown': function(e) {
                if(e.which === 13) {
                    $(this).click();
                }
            }
        });

        $('#JS_domIntl_peopleConfirmButton').on({
            'touchstart mousedown': _touchStart,
            'touchmove': _touchMove,
            'click touchend': function(e){
                e.stopPropagation();
                if(_isTouched(e)) { return; }
                if(e.type === 'touchend' && touchInfo.pageY !== currentTouchInfo.pageY) { return; }
                var values = _this.JLJS_domIntl_passengerControl.getValue();
                if (!_this.checkValiMdlPassenger(values)){return false;}
                _this.submitData['JS_nbAdt'] = values['JS_domIntl_Adult'];
                _this.submitData['JS_nbYadt'] = values['JS_domIntl_Youth'] || '0';
                _this.submitData['JS_nbChd'] = values['JS_domIntl_Child'] || '0';
                _this.submitData['JS_nbInf'] = values['JS_domIntl_Infant'] || '0';
                _this.dispPassenger();
                _this.closeModal();
                _this.$selectNum.focus();
            }
        });

        this.$seatCls.on({
            'touchstart mousedown': _touchStart,
            'touchmove': _touchMove,
            'click touchend': function(e){
                e.stopPropagation();
                if(_isTouched(e)) { return; }
                if(e.type === 'touchend' && touchInfo.pageY !== currentTouchInfo.pageY) { return; }
                if($('#JS_domIntl_packageSelect').css('display') !== 'none') _this.closeModal();
                var info = _this.JLJS_domIntl_selectControl.info;
                var id;
                for(var i = 0; i < info.length; i++){
                    if(_this.submitData['JS_cff'] === info[i]['val']){
                        id = info[i]['id'];
                        break;
                    }
                }
                if(id){
                    _this.JLJS_domIntl_selectControl.setCheck(id);
                }

                _this.hideAriaElm(_this.errorElmMap.$noClassSelectMdl);
                //$('#JS_domIntl_packageSelect').find('div').css('position', 'initial');
                _this.openModal($('#JS_domIntl_packageSelect'));
                JLJS_base.preventTabbing($('#JS_domIntl_packageSelect'),$('#JS_domIntl_packageSelect, #JS_domIntl_packageSelect .JS_jalSearchModalClose'),true);
                _this.unselectClassRadio();
            },
            'keydown': function(e) {
                if(e.which === 13) {
                    $(this).click();
                }
            }
        });

        this.$discountType.on({
            'touchstart mousedown': _touchStart,
            'touchmove': _touchMove,
            'click touchend': function (e) {
                e.stopPropagation();
                if (_isTouched(e)) {
                    return;
                }
                if (e.type === 'touchend' && touchInfo.pageY !== currentTouchInfo.pageY) {
                    return;
                }
                if ($('#JS_domIntl_packageDiscountType').css('display') !== 'none') _this.closeModal();
                var info = _this.JLJS_domIntl_discountControl.info;
                var id;
                for (var i = 0; i < info.length; i++) {
                    if (_this.submitData['JS_discount'] === info[i]['val']) {
                        id = info[i]['id'];
                        break;
                    }
                }
                _this.JLJS_domIntl_discountControl.setCheck(id);
                _this.openModal($('#JS_domIntl_packageDiscountType'));
                JLJS_base.preventTabbing($('#JS_domIntl_packageDiscountType'), $('#JS_domIntl_packageDiscountType, #JS_domIntl_packageDiscountType .JS_jalSearchModalClose'), true);
            },
            'keydown': function (e) {
                if (e.which === 13) {
                    $(this).click();
                }
            }
        });

        this.$selectConfirmButton.on({
            'touchstart mousedown': _touchStart,
            'touchmove': _touchMove,
            'click touchend': function(e){
                e.stopPropagation();
                if(_isTouched(e)) { return; }
                if(e.type === 'touchend' && touchInfo.pageY !== currentTouchInfo.pageY) { return; }
                if(!_this.checkValiMdlClass()){return false;}
                $(_this.$seatCls).find('span').text(_this.JLJS_domIntl_selectControl.getValue()['label']);
                _this.submitData['JS_cff'] = _this.JLJS_domIntl_selectControl.getValue()['value'];
                _this.closeModal();
                _this.$seatCls.focus();
            }
        });

        $('#JS_domIntl_discountConfirmButton').on({
            'touchstart mousedown': _touchStart,
            'touchmove': _touchMove,
            'click touchend': function (e) {
                e.stopPropagation();
                if (_isTouched(e)) {
                    return;
                }
                if (e.type === 'touchend' && touchInfo.pageY !== currentTouchInfo.pageY) {
                    return;
                }
                $(_this.$discountType).find('span').text(_this.JLJS_domIntl_discountControl.getValue()['label']);
                _this.submitData['JS_discount'] = _this.JLJS_domIntl_discountControl.getValue()['value'];
                //_this.disabledSubmitButton();
                _this.closeModal();
                _this.$discountType.focus();
            }
        });

        this.$domAirChgBtn.on({
            'touchstart mousedown': _touchStart,
            'touchmove': _touchMove,
            'click touchend': function(e){
                e.stopPropagation();
                if(_isTouched(e)) { return; }
                if(e.type === 'touchend' && touchInfo.pageY !== currentTouchInfo.pageY) { return; }
                _this.domChangeArea();
            }
        });

        this.$depDatetime.on({
            'touchstart mousedown': _touchStart,
            'touchmove': _touchMove,
            'click touchend': function(e){
                //if(!JLJS.isPcSite() && e.type === 'click') return;
                e.stopPropagation();
                if(_isTouched(e)) { return; }
                if(e.type === 'touchend' && touchInfo.pageY !== currentTouchInfo.pageY) { return; }
                if($('#JS_domIntl_packageSelectDateTime').css('display') !== 'none')_this.closeModal();
                //$('#JS_domIntl_packageSelectDateTime').find('div').css('position', 'initial');
                $('#JS_domIntl_packageSelectDateTime').attr('data-target', 'dep');
                if(_this.submitData['JS_departureDatetime'] === '00'){
                    $('#JS_domIntl_lbTimeNon').click();
                }else{
                    var info = _this.JLJS_domIntl_datetimeSelectControl.info;
                    var id;
                    for(var i = 0; i < info.length; i++){
                        if(_this.submitData['JS_departureDatetime'] === info[i]['val']){
                            //$('#JS_domIntl_lbTime' + _this.submitData['JS_departureDatetime']).click();
                            id = info[i]['id'];
                            break;
                        }
                    }
                    _this.JLJS_domIntl_datetimeSelectControl.setCheck(id);
                }
                _this.openModal($('#JS_domIntl_packageSelectDateTime'));
                JLJS_base.preventTabbing($('#JS_domIntl_packageSelectDateTime'),$('#JS_domIntl_packageSelectDateTime,#JS_domIntl_packageSelectDateTime .JS_jalSearchModalClose'),true);

                //$('#JS_domIntl_packageSelectDateTime').find('a,button,input').first().focus();
            },
            'keydown': function(e) {
                if(e.which === 13) {
                    $(this).click();
                }
            }
        });
        this.$arrDatetime.on({
            'touchstart mousedown': _touchStart,
            'touchmove': _touchMove,
            'click touchend': function(e){
                //if(!JLJS.isPcSite() && e.type === 'click') return;
                e.stopPropagation();
                if(_isTouched(e)) { return; }
                if(e.type === 'touchend' && touchInfo.pageY !== currentTouchInfo.pageY) { return; }
                if($('#JS_domIntl_packageSelectDateTime').css('display') !== 'none')_this.closeModal();
                //$('#JS_domIntl_packageSelectDateTime').find('div').css('position', 'initial');
                $('#JS_domIntl_packageSelectDateTime').attr('data-target', 'arr');
                if(_this.submitData['JS_departureDatetime2'] === '00'){
                    $('#JS_domIntl_lbTimeNon').click();
                }else{
                    //$('#JS_domIntl_lbTime' + _this.submitData['JS_departureDatetime2']).click();
                    var info = _this.JLJS_domIntl_datetimeSelectControl.info;
                    var id;
                    for(var i = 0; i < info.length; i++){
                        if(_this.submitData['JS_departureDatetime2'] === info[i]['val']){
                            id = info[i]['id'];
                            break;
                        }
                    }
                    _this.JLJS_domIntl_datetimeSelectControl.setCheck(id);
                }
                _this.openModal($('#JS_domIntl_packageSelectDateTime'));
                JLJS_base.preventTabbing($('#JS_domIntl_packageSelectDateTime'),$('#JS_domIntl_packageSelectDateTime,#JS_domIntl_packageSelectDateTime .JS_jalSearchModalClose'),true);
                //$('#JS_domIntl_packageSelectDateTime').find('a,button,input').first().focus();
            },
            'keydown': function(e) {
                if(e.which === 13) {
                    $(this).click();
                }
            }
        });

        $('#JS_domIntl_selectDateTimeConfirmButton').on({
            'touchstart mousedown': _touchStart,
            'touchmove': _touchMove,
            'click touchend': function(e){
                //if(!JLJS.isPcSite() && e.type === 'click') return;
                e.stopPropagation();
                if(_isTouched(e)) { return; }
                if(e.type === 'touchend' && touchInfo.pageY !== currentTouchInfo.pageY) { return; }
                var value = _this.JLJS_domIntl_datetimeSelectControl.getValue();
                if($('#JS_domIntl_packageSelectDateTime').attr('data-target') === 'dep'){
                    _this.$depDatetime.find('span').text(value['label']);
                    _this.submitData['JS_departureDatetime'] = value['value'];
                    _this.submitData['JS_departureDate'] = _this.getIntSubmitDate('dep1');
                    _this.$depDatetime.focus();
                }else{
                    _this.$arrDatetime.find('span').text(value['label']);
                    _this.submitData['JS_departureDatetime2'] = value['value'];
                    _this.submitData['JS_departureDate2'] = _this.getIntSubmitDate('dep2');
                    _this.$arrDatetime.focus();
                }
                _this.closeModal();
            }
        });

        $('#JS_domIntl_lbCalendarSearchCheck').find('input').on({
            'change': function(e){
                if($(this).prop('checked')) _this.submitData['JS_isFlexible'] = 'TRUE';
                else _this.submitData['JS_isFlexible'] = 'FALSE';
            },
            'keydown': function(e){
                if(e.which === 13) {
                    var _check = !$(this).prop('checked') ? true: false;
                    $(this).prop('checked',_check);
                }
            }
        });

        $('#JS_domIntl_nonStopCheck').find('input').on({
            'change': function(e){
                if($(this).prop('checked')) _this.submitData['JS_directNonStop'] = 'TRUE';
                else _this.submitData['JS_directNonStop'] = 'FALSE';
            },
            'keydown': function(e){
                if(e.which === 13) {
                    $(this).siblings('label').click();
                }
            }
        });

        this.$JS_domInterOnewayCheck.on({
            'change': function(e){
                isTouch = false;
                var checkedBoxLabel = $(this).prop('checked') ? '片道チェックボックス': '往復チェックボックス';
                JLJS_analysisCommon.pushGtmClickEvent('[共通 F&S]モジュール', '往復片道切替', checkedBoxLabel);
                var searchTypeId = $(this).prop('checked') ? '#JS_domIntl_oneWay': '#JS_domIntl_roundTrip';
                $(searchTypeId).find('button').click();
            },
            'keydown': function(e){
                if(e.which === 13) {
                    $(this).click();
                }
            }
        });

        this.$modalClose.on({
            'touchstart mousedown': _touchStart,
            'touchmove': _touchMove,
            'touchend click': function(e) {
                e.stopPropagation();
                if(JLJS_tabControl.getTarget() !== 'domIntl') return;
                if(_isTouched(e)) { return; }
                if(e.type === 'touchend' && touchInfo.pageY !== currentTouchInfo.pageY) { return; }
                if($(e.target).hasClass('JS_jalSearchModalClose')) {
                    if($(e.target).closest('#JS_domIntl_reservSelectorWrap').length > 0){
                        _this.checkArea();
                        _this.closeAirportSelect($(_this.WRAP));
                        return;
                    }
                    _this.closeModal(_this.currentOpenModal);
                }
            }
        });

        $(document).on({
            'touchstart mousedown': _touchStart,
            'touchmove': _touchMove,
            'touchend click': function(e) {
                e.stopPropagation();
                //if(!JLJS.isPcSite() && e.type === 'click') return;
                if(JLJS_tabControl.getTarget() !== 'domIntl') return;
                if(_isTouched(e)) { return; }
                if(e.type === 'touchend' && touchInfo.pageY !== currentTouchInfo.pageY) { return; }
                _this.closeAirportSelect($(_this.WRAP));
            }
        }, '#JS_domIntl_AirSelOverlay');

        $(document).on({
            'touchstart mousedown': _touchStart,
            'touchmove': _touchMove,
            'click touchend': function(e){
                //if(!JLJS.isPcSite() && e.type === 'click') return;
                if(JLJS_tabControl.getTarget() !== 'domIntl') return;
                e.stopPropagation();
                if(_isTouched(e)) { return; }
                if(e.type === 'touchend' && touchInfo.pageY !== currentTouchInfo.pageY) { return; }
                _this.closeModal();
            }
        }, '[data-btn="JS_close"]');

        $(window).resize(function() {
            if(JLJS.isPcSite()){
                if($(_this.$tmplWrap).css('display') !== 'none'){
                    $(_this.$tmplWrap).removeClass('JS_dispSPSize');
                    var depOrArr = $(_this.$tmplWrap).attr('JS_DepOrArr');
                    if(depOrArr === 'dep'){
                        $(_this.$tmplWrap).offset(_this.getModalOffset(_this.$depLbAir, true));
                    }else{
                        $(_this.$tmplWrap).offset(_this.getModalOffset(_this.$arrLBAir, true));
                    }
                }
            }else{
                if($(_this.$tmplWrap).css('display') !== 'none'){
                    $(_this.$tmplWrap).addClass('JS_dispSPSize');
                    $(_this.$tmplWrap).offset(_this.getModalOffset(_this.$depLbAir, true));
                }
            }
            _this.changeDispClass();
        });

        $(this.WRAP).on({
            'touchstart mousedown': _touchStart,
            'touchmove': _touchMove,
            'mouseup touchend': function(e){
                e.stopPropagation();
                if(_isTouched(e)) { return; }
                if(e.type === 'touchend' && touchInfo.pageY !== currentTouchInfo.pageY) { return; }
                _this.moveAccording($(this), e);
            },
            'keydown': function(e) {
                e.stopPropagation();
                if(e.which === 13) {
                    _this.moveAccording($(this), e);
                }
            }
        }, '[role="button"]');

        $(this.WRAP).on({
            'keydown': function(e) {
                if(e.which === 9) {
                    var $suggest = $(_this.WRAP).find('[data-content="JS-suggest"]');
                    var isSuggest = $suggest.is(':hidden') ? false : true;
                    if(e.shiftKey) {
                        var $first = isSuggest ? $suggest.find('a:visible').first() : $(_this.WRAP).find('a:visible,[role="button"]:visible').first();
                        var $elm = $(_this.WRAP).attr('js_deporarr') === 'dep' ? _this.$depLbAir : _this.$arrLBAir;
                        if($(this).is($first)) {
                            $elm.find('.JS_cityTabListDispBtn').focus();
                            return false;
                        }
                        return;
                    }
                    var $target = $(_this.WRAP).find('a:visible,[role="button"]:visible').last();
                    if($(this).is($target)) {
                        var $elm;
                        var $nonStopCheck = $('#JS_domIntl_nonStopCheck');
                        if($(_this.WRAP).attr('js_deporarr') === 'dep'){
                            $elm = ($('#JS_domAirChgBtn').is(':visible'))? $('#JS_domAirChgBtn') :
                                (JLJS.isPcSite()) ? $('#JS_domIntl_arrivalAirport') :
                                    $('#JS_domIntl_domLbArrAir');
                        }else{
                            $elm = ($nonStopCheck.css('display')==='none')? _this.$depDate : $nonStopCheck.find('input');
                        }
                        _this.closeAirportSelect($(_this.WRAP));
                        $elm.focus();
                        return false;
                    }
                }
                if(e.which === 27) {
                    var $elm = $(_this.WRAP).attr('js_deporarr') === 'dep' ? _this.$depLbAir : _this.$arrLBAir;
                    _this.closeAirportSelect($(_this.WRAP));
                    $elm.focus();
                }
            }
        }, 'a, [role="button"]');

        $('#JS_domIntl_mldAccordionOption1, #JS_domIntl_mldAccordionOption2').on({
            'touchstart mousedown': _touchStart,
            'touchmove': _touchMove,
            'click touchend': function(e){
                e.stopPropagation();
                if(_isTouched(e)) { return; }
                if(e.type === 'touchend' && touchInfo.pageY !== currentTouchInfo.pageY) { return; }
                _this.moveAccording($(this), e);
            },
            'keydown': function(e) {
                e.stopPropagation();
                if(e.which === 13) {
                    _this.moveAccording($(this), e);
                }
            }
        });


        this.$submitBtn.on({
            'touchstart mousedown': _touchStart,
            'touchmove': _touchMove,
            'click touchend': function(e){
                //if(!JLJS.isPcSite() && e.type === 'click') return;
                e.stopPropagation();
                if(_isTouched(e)) { return; }
                if(e.type === 'touchend' && touchInfo.pageY !== currentTouchInfo.pageY) { return; }

                var errorMsgFlg = false;
                _this.clearErrorMsg();

                var originAirportHash = {};
                if(_this.domInter === 'inter') {
                    originAirportHash = _this.getSelectedAirports(_this.submitData);
                    _this.checkAreaCode();
                }
                if(!_this.isValidSearchCondition()) {
                    errorMsgFlg = true;
                }
                if(_this.domInter === 'dom'){
                    if(JLJS.isPcSite()){
                        $('#JS_domIntl_searchForm').attr('action', _this.action_dom_pc);
                    }else{
                        $('#JS_domIntl_searchForm').attr('action', _this.action_dom_sp);
                    }

                    if(errorMsgFlg){
                        _this.readAllErrorMessage();
                        return;
                    }

                    _this.saveCookie('domModuleTopCookie', _this.defaultModuleData.saveCookieList);
                    _this.createSubmitParam();
                    _this.setHistoryCookie();

                    if (!_this.isOverSwitchDate(_this.getBoardingDate('departure'))) {
                        if (JLJS.isPcSite()) {
                            $('#JS_domIntl_searchForm').attr('action', _this.action_dom_pc);
                        } else {
                            $('#JS_domIntl_searchForm').attr('action', _this.action_dom_sp);
                        }

                        _this.createSubmitParam();
                        $(document.forms.JS_domIntl_searchForm).submit();
                    } else {
                        $.ajax({
                            url: '/cgi-bin/jal/common_rn/domEnc/getDomEnc.cgi',
                            type: 'GET',
                            dataType: 'json',
                            cache: false
                        }).done(function (data) {
                            $('#JS_domIntl_searchForm').attr('action', _this.action_domNew);
                            _this.createNewSubmitParam(data.dt_sid, data.hv_sid);
                            $(document.forms.JS_domIntl_searchForm).submit();
                        }).fail(function () {
                            _this.showAriaElm(_this.errorElmMap.$maintenance);
                            return;
                        });
                    }
                } else {
                    var market = $(_this.$depValAir).attr('market');
                    var $diffEnc = $.ajax({
                        url: '/cgi-bin/jal/common_rn/getEnc1A.cgi',
                        cache: false
                    });

                    $diffEnc.then(function() {
                        var $deff = new $.Deferred();
                        var enc1A = JLJS_CookieMgr.get('enc1A');
                        $deff.resolve();
                        return $deff;
                    }).then(function() {
                        var $deffMarket = (_this.domInter === 'dom' || market === 'JAL_JR_JP') ? $.when($.noop) : _this.openMessegeModalp({
                            lang: JLJS_airportControl.getSiteLangFromMarket(market),
                            langData: JLJS_airportControl.getMarketLangData(market)
                        }, _this.defaultModuleData.cleanDelayMS, errorMsgFlg);
                        return $deffMarket;
                    }).done(function(param) {
                        var enc1A = JLJS_CookieMgr.get('enc1A');
                        if(/^E...$/.test(enc1A)) {
                            _this.showAriaElm(_this.errorElmMap.$maintenance);
                            errorMsgFlg = true;
                        }

                        if (!_this.isMem) {
                            _this.submitData['JS_simulateousUpgrade'] = '';
                        } else {
                            if (JLJS_INTER_CFF_DATA.CLASSSET[_this.submitData['JS_cff']][1]) {
                                _this.submitData['JS_simulateousUpgrade'] = 'TRUE';
                            } else {
                                _this.submitData['JS_simulateousUpgrade'] = 'FALSE';
                            }
                        }
                        if(_this.submitData['JS_pattern'] === 'oneway'){
                            _this.submitData['JS_departureDate2'] = '';
                            _this.submitData['JS_departureYear2'] = '';
                            _this.submitData['JS_departureMonth2'] = '';
                            _this.submitData['JS_departureDay2'] = '';
                        }
                        _this.changeYouthCheck();
                        if(!_this.isYouth) {
                            _this.submitData['JS_nbYadt'] = '';
                        }
                        if(errorMsgFlg){
                            _this.readAllErrorMessage();
                            return;
                        }

                        _this.saveCookie('domModuleTopCookie', _this.defaultModuleData.saveCookieList, originAirportHash);
                        JLJS_CookieMgr.remove(_this.CK_CITY_SELECT);

                        _this.createSubmitParam();
                        _this.setHistoryCookie();
                        $(document.forms.JS_domIntl_searchForm).submit();
                    }).fail(function(e) {
                        if(e === 'cancel') return;
                        _this.showAriaElm(_this.errorElmMap.$maintenance);
                        _this.readAllErrorMessage();
                        return;
                    });
                }
            }
        });

        function _touchStart(e) {
            e.stopPropagation();
            if(e.type === 'touchstart') {
                touchInfo = e.changedTouches[0];
                currentTouchInfo = touchInfo;
            } else {
                touchInfo = 0;
                currentTouchInfo = 0;
            }
        }

        function _touchMove(e) {
            e.stopPropagation();
            currentTouchInfo = e.changedTouches[0];
        }

        function _isTouched(e) {
            if(isTouch && e.type !== 'touchend') {
                isTouch = false;
                return true;
            } else if(!isTouch && e.type === 'touchend') {
                isTouch = true;
            }
            return false;
        }

        $('#JS_calendarGuidButton').on('click', function () {
            if (_this.$JS_calendarNotes.is(':visible')) {
                _this.$JS_calendarNotes.slideUp();
                _this.$JS_calendarGuidBtn.removeClass('JS_open');
                _this.$JS_calendarNotes.attr('aria-hidden', 'true');
                _this.$JS_calendarWrap.addClass('guide-close');
            } else {
                _this.$JS_calendarNotes.slideDown();
                _this.$JS_calendarGuidBtn.addClass('JS_open');
                _this.$JS_calendarNotes.attr('aria-hidden', 'false');
                _this.$JS_calendarWrap.removeClass('guide-close');
            }
        });
    },

    getBoardingDate : function(type){
        var date = null;
        if (type == 'departure') {
            var yy = this.submitData['JS_departureYear'];
            var mm = this.submitData['JS_departureMonth'];
            var dd = this.submitData['JS_departureDay'];
            date = new Date(yy, mm - 1, dd);
        } else if (type == 'arrival') {
            var yy = this.submitData['JS_departureYear2'];
            var mm = this.submitData['JS_departureMonth2'];
            var dd = this.submitData['JS_departureDay2'];
            date = new Date(yy, mm - 1, dd);
        }

        return date;
    },

    isOverSwitchDate : function(date){
        return date >= this.switchDate
    },


    lowFareControl: {
        today: null,
        lowFare: {},
        lastRoute: null,
        tripType: null,
        displayFlag: true,
        ajaxFlag: {},
        stack: [],
        switchYM: null,
        switchYMD: null,
        MAX_MONTH: 12,
        maxMonthOfRequest: null,
        lastHeight: 0,
        switchHeight: 0,
        monthlist: [],
        isReturnSegment: null,
        onDepDay: [],
        loadImg: '/jp/ja/commonY20/img_sites/loading_bar.gif',

        $ID_JS_dispCalendar: null,
        $ID_JS_depDate: null,
        $JS_calendarWrap: null,
        $JS_calendarList: null,
        $JS_domIntl_roundTrip: null,
        $JS_formOptionHead: null,
        $JS_formOptionBtn: null,
        $JS_formOptionBody: null,
        $JS_calendarNotes: null,
        $JS_holidayNotesDefault: null,
        $resetBtn: null,
        $JS_NotesList: null,
        $JS_LowpriceNotes: null,
        $JS_impossibleNotes: null,
        $txtTemp: null,
        $JS_calendarGuidBtn: null,
        $JS_calHolidayNotes: null,

        switchDate: new Date(2024, 3, 12),

        setup: function () {
            this.init();
            if (!JLJS.isPcSite()) {
                this.calendarScroll();
            }
        },

        init: function () {
            this.today = new Date();
            this.switchYM = JLJS_dateUtil.formatYYYYMM(this.switchDate);
            this.switchYMD = JLJS_dateUtil.formatYYYYMMDD(this.switchDate);
            var lastDay = this.isOverSwitchDate(this.today) ? this.today : this.switchDate;
            this.maxMonthOfRequest = JLJS_dateUtil.formatYYYYMM(new Date(lastDay.getFullYear(), lastDay.getMonth() + this.MAX_MONTH));
            var months = [];
            for (var i = 0; i < 12; i++) {
                var todayY = this.today.getFullYear();
                var todayM = this.today.getMonth() + i;
                var target = new Date(todayY, todayM, 1);
                months.push(JLJS_dateUtil.formatYYYYMM(target));
            }
            this.monthlist = months;
            this.$ID_JS_dispCalendar = $("#JS_dispCalendar");
            this.$ID_JS_depDate = $('#JS_domIntl_domLbDepDate');
            this.$JS_calendarWrap = this.$ID_JS_dispCalendar.find('.calendar-table-wrap');
            this.$JS_calendarList = this.$ID_JS_dispCalendar.find('#JS_calendarOl');

            this.$JS_domIntl_roundTrip = $('#JS_domIntl_roundTrip').find('button');
            this.$JS_formOptionHead = $('#JS_domIntl_mldAccordionOption2');
            this.$JS_formOptionBtn = this.$JS_formOptionHead.find('.accordion-btn-icon');
            this.$JS_formOptionBody = $('#JS_domIntl_mldAccordionOptionPanel2');
            this.$resetBtn = $('#JS_calendarResetButton');
            this.$JS_calendarNotes = $('#JS_calendarNotes');
            this.$JS_NotesList = $('#JS_notesList');
            this.$JS_LowpriceNotes = $('#JS_lowPriceNotes');
            this.$JS_impossibleNotes = $('#JS_impossibleNotes');
            this.$txtTemp = $('#JS_calendarTxtTemp');
            this.$JS_calendarGuidBtn = $('#JS_calendarGuidButton');
            this.$JS_calHolidayNotes = this.$ID_JS_dispCalendar.find('.def-holiday');
        },

        openModal: function (submitData) {
            var formValue = this.getFormValue(submitData);
            if (!formValue) {
                this.lastRoute = "";
                this.updateCalendarClass(false);
                this.$ID_JS_dispCalendar.removeClass('alternative');
                this.$JS_calHolidayNotes.attr('aria-hidden', 'false');
                this.$JS_calendarGuidBtn.attr('aria-hidden', 'true');
                return;
            }
            this.$ID_JS_dispCalendar.addClass('alternative');
            this.$JS_calHolidayNotes.attr('aria-hidden', 'true');
            this.$JS_calendarGuidBtn.attr('aria-hidden', 'false');
            if ((this.tripType != formValue.tripType) || (this.lastRoute != formValue.route)) {
                this.stack = [];
            }
            this.lastRoute = formValue.route;
            this.tripType = formValue.tripType;

            for (var i = 0; i < this.monthlist.length; i++) {
                if (this.isOverSwitchYM(this.monthlist[i])) {
                    var $buttonParent = this.$JS_calendarList.find('#JS' + this.monthlist[i]).find('button:parent').parent();
                    var html = '';
                    html += '<span class="cell-price JS_depLow" aria-hidden="false"><img src="' + this.loadImg + '" style="height: 18px;" /></span>';
                    if (this.tripType == 'rt') {
                        html += '<span class="cell-price JS_arrLow" aria-hidden="true"><img src="' + this.loadImg + '" style="height: 18px;" /></span>';
                    }
                    $buttonParent.append(html);
                }
            }

            if (this.tripType == 'rt' && submitData['JS_departureYear'] && submitData['JS_departureYear2']) {
                this.$JS_calendarList.addClass('JS_hide-fare').removeClass('JS_change-fare');
            } else if (this.tripType == 'rt' && submitData['JS_departureYear'] && !submitData['JS_departureYear2']) {
                this.$JS_calendarList.removeClass('JS_hide-fare').addClass('JS_change-fare');
            } else {
                this.$JS_calendarList.removeClass('JS_hide-fare').removeClass('JS_change-fare');
            }

            var scrollTop = 0;
            var returnRoute = this.getReturnRoute(formValue.route);
            if (JLJS.isPcSite()) {
                var targetMonth = [];
                var $openCalendars = this.$ID_JS_dispCalendar.find('.JS_calendarList:not(.dis-hide)').find('.calendar-table');
                for (var i = 0; i < $openCalendars.length; i++) {
                    targetMonth.push($openCalendars.eq(i).attr('id').slice(2));
                }
                this.callRequest(formValue.route, targetMonth);
                if (this.tripType == 'rt') {
                    this.callRequest(returnRoute, targetMonth);
                }
            } else {
                scrollTop = this.$JS_calendarWrap.scrollTop();
                var calendarHeight = this.$JS_calendarWrap.children().height();
                var monthHeight = calendarHeight / 12;

                for (var i = 0; i < this.monthlist.length; i++) {
                    if (this.switchYM == this.monthlist[i]) {
                        this.switchHeight = monthHeight * (i == 0 ? 0 : i - 1);
                        break;
                    }
                }

                var targetMonth = this.getScrollMonth(monthHeight, scrollTop, 'open');
                var targetMonth1 = [targetMonth[0], targetMonth[1]];
                var targetMonth2 = [targetMonth[2], targetMonth[3]];

                this.callRequest(formValue.route, targetMonth1);
                this.callRequest(formValue.route, targetMonth2);
                if (this.tripType == 'rt') {
                    this.callRequest(returnRoute, targetMonth1);
                    this.callRequest(returnRoute, targetMonth2);
                }
            }

            if (!JLJS.isPcSite()) {
                targetMonth = [targetMonth[1], targetMonth[2]];
            }
            this.updateCalendarClass(targetMonth, scrollTop);

            if (this.lowFare[this.lastRoute]) {
                this.updateShowLowFare(this.lastRoute, this.lowFare[this.lastRoute]);
                if (this.tripType == 'rt') {
                    var returnRoute = this.getReturnRoute(this.lastRoute);
                    this.updateShowLowFare(returnRoute, this.lowFare[returnRoute]);
                }
            }
        },

        pageChange: function () {
            this.init();
            if (JLJS.isPcSite()) {
                if (this.lastRoute.length == 0) {
                    return;
                }

                var targetMonth = [];
                var $openCalendars = this.$ID_JS_dispCalendar.find('.JS_calendarList:not(.dis-hide)').find('.calendar-table');
                for (var i = 0; i < $openCalendars.length; i++) {
                    targetMonth.push($openCalendars.eq(i).attr('id').slice(2));
                }

                this.updateCalendarClass(targetMonth, null);
                this.callRequest(this.lastRoute, targetMonth);

                if (this.tripType == 'rt') {
                    var returnRoute = this.getReturnRoute(this.lastRoute);
                    this.callRequest(returnRoute, targetMonth);
                }
            }
        },

        calendarScroll: function () {
            var _this = this;
            this.$JS_calendarWrap.scroll(function () {
                if (JLJS_tabControl.getTarget() != 'domIntl' || _this.lastRoute.length == 0) {
                    return;
                }

                var scrollTop = this.scrollTop;
                var calendarHeight = _this.$JS_calendarWrap.children().height();
                var monthHeight = calendarHeight / 12;
                var lastHeight = _this.lastHeight;
                var borderdown = lastHeight + monthHeight;
                var borderUp = lastHeight - monthHeight;

                if ((lastHeight < scrollTop && borderdown < scrollTop)
                    || (lastHeight > scrollTop && borderUp > scrollTop)) {

                    var status = 'down';
                    if (lastHeight > scrollTop) {
                        status = 'up';
                    }
                    var targetMonth = _this.getScrollMonth(monthHeight, scrollTop, status);
                    _this.updateCalendarClass(targetMonth, scrollTop);
                    _this.callRequest(_this.lastRoute, targetMonth);

                    if (_this.tripType == 'rt') {
                        var returnRoute = _this.getReturnRoute(_this.lastRoute);
                        _this.callRequest(returnRoute, targetMonth);
                    }
                }
            });
        },

        getFormValue: function (submitData) {
            var tripType;
            if (submitData['JS_pattern'] == 'roundtrip') {
                tripType = 'rt';
            } else {
                tripType = 'ow';
            }

            var route;
            var airport1 = submitData['JS_departureLocation'];
            var airport2 = submitData['JS_departureLocation2'];
            if (airport1 && airport2 && airport1 != airport2) {
                route = airport1 + airport2;
            } else {
                return null;
            }

            if (submitData['JS_arrivalCountryCode'] != 'JPN'
                || submitData['JS_departureCountryCode'] != 'JPN') {
                return;
            }

            var formValue = {
                year: submitData['JS_departureYear'],
                month: submitData['JS_departureMonth'],
                route: route,
                tripType: tripType,
            };
            return formValue;
        },

        hasRequest: function (route, yearMonth) {
            for (var i = 0; i < this.stack.length; i++) {
                if (this.stack[i][0] == route && this.stack[i][1] == yearMonth) {
                    return true;
                }
            }
            return false;
        },

        callRequest: function (route, targetMonth) {
            if (route in this.lowFare == false || (targetMonth[0] in this.lowFare[route] == false && targetMonth[1] in this.lowFare[route] == false)) {
                if ((this.switchYM <= targetMonth[0] && this.maxMonthOfRequest >= targetMonth[0])
                    || (this.switchYM <= targetMonth[1] && this.maxMonthOfRequest >= targetMonth[1])) {
                    this.requestLowFare(route, targetMonth);
                } else {
                    for (var i = 0; i < targetMonth.length; i++) {
                        this.errorShowFare(targetMonth[i]);
                    }
                }
            }

        },

        requestLowFare: function (route, targetMonth) {
            var _this = this;
            var yearMonth = targetMonth[0];
            var year = Number(yearMonth.slice(0, 4));
            var month = Number(yearMonth.slice(-2)).toString();
            var dep = route.slice(0, 3);
            var arr = route.slice(-3);
            var lastReturnRoute = this.getReturnRoute(this.lastRoute);

            if (this.ajaxFlag[route + yearMonth] || this.hasRequest(route, yearMonth)) {
                return;
            }
            if (_this.lastRoute == route || lastReturnRoute == route) {
                if (Object.keys(this.ajaxFlag).length >= 4) {
                    this.stack.push([route, targetMonth]);
                    return;
                }

                this.ajaxFlag[route + yearMonth] = true;
                $.ajax({
                    url: "/cgi-bin/jal/instant-search/price.cgi",
                    type: "POST",
                    dataType: "json",
                    data: {
                        year: year,
                        month: month,
                        dep: dep,
                        arr: arr,
                        type: 1,
                        cache: false
                    }
                }).done(function (json, status, jqXHR) {
                    var data = {};
                    if (!json['errors']) {
                        data = _this.parseJson(route, targetMonth, json);
                    } else {
                        data[route] = {};
                        for (var i = 0; i < targetMonth.length; i++) {
                            data[route][targetMonth[i]] = [];
                        }
                    }

                    if (_this.lastRoute == route || lastReturnRoute == route) {
                        _this.updateShowLowFare(route, data[route]);
                    }

                    _this.setLowFare(data);
                }).fail(function (jqXHR) {
                    for (var i = 0; i < targetMonth.length; i++) {
                        _this.errorShowFare(targetMonth[i]);
                    }
                }).always(function () {
                    delete _this.ajaxFlag[route + yearMonth];

                    if (_this.stack.length != 0) {
                        var prm = _this.stack.pop();
                        _this.requestLowFare(prm[0], prm[1]);
                    }
                });
            }
        },

        parseJson: function (route, targetMonth, json) {
            var lowFares = {};
            lowFares[route] = {};
            for (var i = 0; i < targetMonth.length; i++) {
                var yyyymm = targetMonth[i];
                lowFares[route][yyyymm] = [];
                if (this.switchYM <= yyyymm) {
                    var yy = yyyymm.slice(0, 4);
                    var mm = yyyymm.slice(-2);
                    var start = (new Date(yy, mm - 1, 1)).getDate();
                    var end = (new Date(yy, mm, 0)).getDate();
                    for (var d = start; d <= end; d++) {
                        lowFares[route][yyyymm].push('');
                    }
                }
            }
            var today = JLJS_dateUtil.formatYYYYMMDD(this.today);
            var jsonData = json['data'];
            for (var i = 0; i < jsonData.length; i++) {
                var departureDate = jsonData[i].departureDate;
                var dateYMD = departureDate.split('-');
                dateYMD[3] = JLJS_dateUtil.formatYYYYMMDD(dateYMD[0], dateYMD[1], dateYMD[2]);
                if (today <= dateYMD[3] && this.switchYMD <= dateYMD[3]) {
                    var dateYM = JLJS_dateUtil.formatYYYYMM(dateYMD[0], dateYMD[1]);
                    var dayNumber = (Number(dateYMD[2]) - 1).toString();
                    var dayPrice = jsonData[i]['prices']['totalPrices'][0]['total'];
                    lowFares[route][dateYM][dayNumber] = dayPrice;
                }
            }
            return lowFares;
        },

        setLowFare: function (data) {
            for (var route in data) {
                if (!this.lowFare[route]) {
                    this.lowFare[route] = {};
                }
                for (var yearMonth in data[route]) {
                    this.lowFare[route][yearMonth] = data[route][yearMonth];
                }
            }
        },

        updateShowLowFare: function (route, lowFares) {
            for (var yyyymm in lowFares) {

                var $tagetTable = this.$ID_JS_dispCalendar.find('#JS' + yyyymm);
                var min = this.searchMinPrice(lowFares[yyyymm]);
                var $targetBtn = $tagetTable.find('button:parent');

                for (var i = 0; i < $targetBtn.length; i++) {
                    var $targetDay = $targetBtn.eq(i);
                    var dayLabel = parseInt($targetDay.text());
                    var day = $targetDay.attr('id');
                    var fare = '-';

                    if (lowFares[yyyymm] && lowFares[yyyymm][dayLabel - 1] && $targetDay.prop('disabled') === false) {
                        fare = lowFares[yyyymm][dayLabel - 1];
                    }
                    if (this.lastRoute == route) {
                        var $lowFareTag = $targetDay.parent().find('.JS_depLow');
                        this.showFareDay(fare, min, $lowFareTag);
                    } else {
                        var returnRoute = this.getReturnRoute(this.lastRoute);
                        if (this.tripType == 'rt' && returnRoute == route) {
                            var $lowFareTag = $targetDay.parent().find('.JS_arrLow');
                            this.showFareDay(fare, min, $lowFareTag);
                        }
                    }
                }
            }
        },

        searchMinPrice: function (array) {
            var min = Number.MAX_SAFE_INTEGER;
            for (var i = 0; i < array.length; i++) {
                if (array[i] && !isNaN(array[i]) && min > array[i]) {
                    min = array[i];
                }
            }
            return min;
        },

        showFareDay: function (fare, min, $lowFareTag) {
            $lowFareTag.html('').html(JLJS_commonUtil.addComma(fare));
            if (fare === min && fare != '－' && fare != '' && fare != '&nbsp;' && fare != null) {
                $lowFareTag.prepend('<img class="icon_low_price" src="/jp/ja/commonY20/img_sites/icon_cal_lowprice.svg" alt="月別最安値">');
            }
            if ($lowFareTag.css("display") == "none") {
                $lowFareTag.attr('aria-hidden', 'true');
            } else {
                if (this.$JS_calendarList.hasClass('JS_hide-fare')) {
                    $lowFareTag.attr('aria-hidden', 'true');
                } else {
                    $lowFareTag.attr('aria-hidden', 'false');
                }
            }
        },

        errorShowFare: function (yearMonth) {
            var $targetTable = this.$ID_JS_dispCalendar.find('#JS' + yearMonth);
            var $targetBtn = $targetTable.find('button:parent').parent();
            $targetBtn.find('.cell-price').html('').attr('aria-hidden', 'true');
        },

        getScrollMonth: function (monthHeight, scrollTop, status) {
            var todayY = this.today.getFullYear();
            var todayM = this.today.getMonth() + 1;
            var floor = Math.floor(scrollTop / monthHeight);
            this.lastHeight = monthHeight * floor;
            var target;
            var targetYM = [];

            todayM = todayM + floor;
            if (status == "down") {
                for (var i = 0; i < 2; i++) {
                    target = new Date(todayY, todayM + i, 1);
                    targetYM.push(JLJS_dateUtil.formatYYYYMM(target));
                }
            } else if (status == "up") {
                for (var i = 0; i < 2; i++) {
                    target = new Date(todayY, (todayM - 2) + i, 1);
                    targetYM.push(JLJS_dateUtil.formatYYYYMM(target));
                }
            } else {
                for (var i = 0; i < 4; i++) {
                    target = new Date(todayY, (todayM - 2) + i, 1);
                    targetYM.push(JLJS_dateUtil.formatYYYYMM(target));
                }
            }

            return targetYM;
        },

        switchLowFare: function (isReturnSegment) {
            if (this.tripType == 'ow') {
                this.$JS_calendarList.removeClass('JS_change-fare');
                return;
            }

            for (var i = 0; i < this.monthlist.length; i++) {
                if (this.isOverSwitchYM(this.monthlist[i])) {
                    var $dayButtonParent = this.$JS_calendarList.find('#JS' + this.monthlist[i]).find('button.days').parent();
                    if (isReturnSegment) {
                        this.$JS_calendarList.removeClass('JS_change-fare').addClass('JS_hide-fare');
                        $dayButtonParent.find('.JS_depLow').attr('aria-hidden', 'true');
                        $dayButtonParent.find('.JS_arrLow').attr('aria-hidden', 'true');
                    } else {
                        this.$JS_calendarList.addClass('JS_change-fare');
                        $dayButtonParent.find('.JS_depLow').attr('aria-hidden', 'true');
                        if (!this.$JS_calendarList.hasClass('JS_hide-fare')) {
                            $dayButtonParent.find('.JS_arrLow').attr('aria-hidden', 'false');
                        }
                    }
                }
            }
        },

        resetLowFare: function () {
            this.$JS_calendarList.removeClass('JS_change-fare JS_hide-fare');
            var $JS_daysBtnParent = this.$JS_calendarList.find('.calendar-table').find('button.days').parent();
            $JS_daysBtnParent.find('.JS_depLow').attr('aria-hidden', 'false');
            $JS_daysBtnParent.find('.JS_arrLow').attr('aria-hidden', 'true');
        },

        updateCalendarClass: function (targetMonth, scrollTop) {
            if (JLJS.isPcSite()) {
                var isOverSwitchDate = false;
                if (targetMonth.length > 0) {
                    for (var i = 0; i < targetMonth.length; i++) {
                        if (this.switchYM <= targetMonth[i]) {
                            isOverSwitchDate = true;
                            break;
                        }
                    }
                }
                if (isOverSwitchDate) {
                    this.$ID_JS_dispCalendar.removeClass('non-price');
                    this.switchNoteAria('false');
                } else {
                    this.$ID_JS_dispCalendar.addClass('non-price');
                    this.switchNoteAria('true');
                }
            } else {
                if (this.switchHeight <= scrollTop) {
                    this.$ID_JS_dispCalendar.removeClass('non-price');
                    this.switchNoteAria('false');
                } else {
                    this.$ID_JS_dispCalendar.addClass('non-price');
                    this.switchNoteAria('true');
                }
            }
        },

        switchNoteAria: function (value) {
            this.$JS_NotesList.attr('aria-hidden', value);
            this.$JS_LowpriceNotes.attr('aria-hidden', value);
            this.$JS_impossibleNotes.attr('aria-hidden', value);
            this.$txtTemp.attr('aria-hidden', value);

            if (this.$JS_calendarGuidBtn.hasClass('JS_open')) {
                this.$JS_calendarNotes.attr('aria-hidden', 'false');
            } else {
                this.$JS_calendarNotes.attr('aria-hidden', 'true');
            }
        },

        getReturnRoute: function (route) {
            return (route.slice(-3) + route.slice(0, 3));
        },

        isOverSwitchDate : function (date) {
            return date >= this.switchDate
        },

        isOverSwitchYM: function (yyyymm) {
            if (this.switchYM <= yyyymm && this.maxMonthOfRequest >= yyyymm) {
                return true;
            }
            return false;
        }

    }
};