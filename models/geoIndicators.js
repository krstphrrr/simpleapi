/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('geoIndicators', {
		ogcFid: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'ogc_fid'
		},
		projectName: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'ProjectName'
		},
		ecologicalSiteId: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'EcologicalSiteId'
		},
		plotId: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'PlotID'
		},
		plotKey: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'PlotKey'
		},
		dateEstablished: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'DateEstablished'
		},
		dateVisited: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'DateVisited'
		},
		bareSoilCover: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'BareSoilCover'
		},
		totalFoliarCover: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'TotalFoliarCover'
		},
		gapCover2550: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'GapCover_25_50'
		},
		gapCover51100: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'GapCover_51_100'
		},
		gapCover101200: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'GapCover_101_200'
		},
		gapCover200Plus: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'GapCover_200_plus'
		},
		gapCover25Plus: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'GapCover_25_plus'
		},
		ahSagebrushCover: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'AH_SagebrushCover'
		},
		hgtWoodyAvg: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'Hgt_Woody_Avg'
		},
		hgtHerbaceousAvg: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'Hgt_Herbaceous_Avg'
		},
		soilStabilityAll: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'SoilStability_All'
		},
		soilStabilityProtected: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'SoilStability_Protected'
		},
		soilStabilityUnprotected: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'SoilStability_Unprotected'
		},
		ahNoxPerenForbCover: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'AH_NoxPerenForbCover'
		},
		ahNoxAnnForbCover: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'AH_NoxAnnForbCover'
		},
		ahNoxPerenGrassCover: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'AH_NoxPerenGrassCover'
		},
		ahNoxAnnGrassCover: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'AH_NoxAnnGrassCover'
		},
		ahNoxAnnForbGrassCover: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'AH_NoxAnnForbGrassCover'
		},
		ahNoxPerenForbGrassCover: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'AH_NoxPerenForbGrassCover'
		},
		ahNoxSucculentCover: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'AH_NoxSucculentCover'
		},
		ahNoxShrubCover: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'AH_NoxShrubCover'
		},
		ahNoxSubShrubCover: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'AH_NoxSubShrubCover'
		},
		ahNoxTreeCover: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'AH_NoxTreeCover'
		},
		numSppNoxPlant: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'NumSpp_NoxPlant'
		},
		ahNonNoxPerenForbCover: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'AH_NonNoxPerenForbCover'
		},
		ahNonNoxAnnForbCover: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'AH_NonNoxAnnForbCover'
		},
		ahNonNoxPerenGrassCover: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'AH_NonNoxPerenGrassCover'
		},
		ahNonNoxAnnGrassCover: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'AH_NonNoxAnnGrassCover'
		},
		ahNonNoxAnnForbGrassCover: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'AH_NonNoxAnnForbGrassCover'
		},
		ahNonNoxPerenForbGrassCover: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'AH_NonNoxPerenForbGrassCover'
		},
		ahNonNoxSucculentCover: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'AH_NonNoxSucculentCover'
		},
		ahNonNoxShrubCover: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'AH_NonNoxShrubCover'
		},
		ahNonNoxSubShrubCover: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'AH_NonNoxSubShrubCover'
		},
		ahNonNoxTreeCover: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'AH_NonNoxTreeCover'
		},
		hgtNonNoxPerenGrassAvg: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'Hgt_NonNoxPerenGrass_Avg'
		},
		dateLoadedInDb: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'DateLoadedInDb'
		},
		primaryKey: {
			type: DataTypes.STRING,
			allowNull: true,
			references: {
				model: 'dataHeader',
				key: 'PrimaryKey'
			},
			field: 'PrimaryKey'
		},
		numSppNonNoxPlant: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'NumSpp_NonNoxPlant'
		},
		hgtPerenGrassAvg: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'Hgt_PerenGrass_Avg'
		},
		fhNoxPerenGrassCover: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'FH_NoxPerenGrassCover'
		},
		fhNoxShrubCover: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'FH_NoxShrubCover'
		},
		fhTotalLitterCover: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'FH_TotalLitterCover'
		},
		fhNoxSubShrubCover: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'FH_NoxSubShrubCover'
		},
		fhNoxSucculentCover: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'FH_NoxSucculentCover'
		},
		fhNoxTreeCover: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'FH_NoxTreeCover'
		},
		fhVagrLichenCover: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'FH_VagrLichenCover'
		},
		fhEmbLitterCover: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'FH_EmbLitterCover'
		},
		fhRockCover: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'FH_RockCover'
		},
		fhWoodyLitterCover: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'FH_WoodyLitterCover'
		},
		fhNonNoxAnnGrassCover: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'FH_NonNoxAnnGrassCover'
		},
		fhNonNoxTreeCover: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'FH_NonNoxTreeCover'
		},
		fhCyanobacteriaCover: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'FH_CyanobacteriaCover'
		},
		fhNonNoxSubShrubCover: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'FH_NonNoxSubShrubCover'
		},
		fhWaterCover: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'FH_WaterCover'
		},
		fhHerbLitterCover: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'FH_HerbLitterCover'
		},
		fhNonNoxPerenForbCover: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'FH_NonNoxPerenForbCover'
		},
		fhDepSoilCover: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'FH_DepSoilCover'
		},
		fhNonNoxPerenGrassCover: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'FH_NonNoxPerenGrassCover'
		},
		fhNoxAnnForbCover: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'FH_NoxAnnForbCover'
		},
		fhNonNoxAnnForbCover: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'FH_NonNoxAnnForbCover'
		},
		fhLichenCover: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'FH_LichenCover'
		},
		fhNonNoxShrubCover: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'FH_NonNoxShrubCover'
		},
		fhSagebrushCover: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'FH_SagebrushCover'
		},
		fhNoxPerenForbCover: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'FH_NoxPerenForbCover'
		},
		fhNoxAnnGrassCover: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'FH_NoxAnnGrassCover'
		},
		fhNonNoxSucculentCover: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'FH_NonNoxSucculentCover'
		},
		ahNonNoxCover: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'AH_NonNoxCover'
		},
		county: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'County'
		},
		state: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'State'
		},
		ahSagebrushCoverLive: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'AH_SagebrushCover_Live'
		},
		hgtSagebrushLiveAvg: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'Hgt_Sagebrush_Live_Avg'
		},
		hgtSagebrushAvg: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'Hgt_Sagebrush_Avg'
		},
		sagebrushShapeLiveSpreadCount: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'SagebrushShape_Live_SpreadCount'
		},
		sagebrushShapeAllSpreadCount: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'SagebrushShape_All_SpreadCount'
		},
		sagebrushShapeLivePredominant: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'SagebrushShape_Live_Predominant'
		},
		sagebrushShapeAllPredominant: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'SagebrushShape_All_Predominant'
		},
		ahPerenGrassCover: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'AH_PerenGrassCover'
		},
		ahPerenForbCover: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'AH_PerenForbCover'
		},
		ahPerenGrassForbCover: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'AH_PerenGrassForbCover'
		},
		hgtPerenForbGrassAvg: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'Hgt_PerenForbGrass_Avg'
		},
		ahShrubCover: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'AH_ShrubCover'
		},
		ahNonSagebrushShrubCover: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'AH_NonSagebrushShrubCover'
		},
		sppPreferredForb: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'Spp_PreferredForb'
		},
		ahPreferredForbCover: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'AH_PreferredForbCover'
		},
		numSppPreferredForb: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'NumSpp_PreferredForb'
		},
		ahAnnGrassCover: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'AH_AnnGrassCover'
		},
		ahGrassCover: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'AH_GrassCover'
		},
		ahForbCover: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'AH_ForbCover'
		},
		ahTallPerenGrassCover: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'AH_TallPerenGrassCover'
		},
		ahShortPerenGrassCover: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'AH_ShortPerenGrassCover'
		},
		sppTallPerenGrass: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'Spp_TallPerenGrass'
		},
		sppShortPerenGrass: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'Spp_ShortPerenGrass'
		},
		hgtTallPerenGrassAvg: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'Hgt_TallPerenGrass_Avg'
		},
		hgtShortPerenGrassAvg: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'Hgt_ShortPerenGrass_Avg'
		},
		hgtGrassAvg: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'Hgt_Grass_Avg'
		},
		hgtForbAvg: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'Hgt_Forb_Avg'
		},
		sppSagebrush: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'Spp_Sagebrush'
		},
		ahNoxCover: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'AH_NoxCover'
		},
		sppNox: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'Spp_Nox'
		},
		fhMossCover: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'FH_MossCover'
		},
		fhDuffCover: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'FH_DuffCover'
		},
		globalId: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'GlobalID'
		},
		createdUser: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'created_user'
		},
		createdDate: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'created_date'
		},
		lastEditedUser: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'last_edited_user'
		},
		lastEditedDate: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'last_edited_date'
		},
		hgtNonSagebrushShrubAvg: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'Hgt_NonSagebrushShrub_Avg'
		},
		sagebrushShapeLiveColumnCount: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'SagebrushShape_Live_ColumnCount'
		},
		sagebrushShapeAllColumnCount: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'SagebrushShape_All_ColumnCount'
		},
		hgtPerenForbAvg: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'Hgt_PerenForb_Avg'
		},
		hgtNoxPerenGrassAvg: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'Hgt_NoxPerenGrass_Avg'
		},
		rhRills: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'RH_Rills'
		},
		rhWaterFlowPatterns: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'RH_WaterFlowPatterns'
		},
		rhBareGround: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'RH_BareGround'
		},
		rhGullies: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'RH_Gullies'
		},
		rhWindScouredAreas: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'RH_WindScouredAreas'
		},
		rhLitterMovement: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'RH_LitterMovement'
		},
		rhSoilSurfResisErosion: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'RH_SoilSurfResisErosion'
		},
		rhSoilSurfLossDeg: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'RH_SoilSurfLossDeg'
		},
		rhCompaction: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'RH_Compaction'
		},
		rhFuncSructGroup: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'RH_FuncSructGroup'
		},
		rhDeadDyingPlantParts: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'RH_DeadDyingPlantParts'
		},
		rhLitterAmount: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'RH_LitterAmount'
		},
		rhInvasivePlants: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'RH_InvasivePlants'
		},
		rhReprodCapabilityPeren: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'RH_ReprodCapabilityPeren'
		},
		rhCommentsSs: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'RH_CommentsSS'
		},
		rhCommentsHf: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'RH_CommentsHF'
		},
		rhCommentsBi: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'RH_CommentsBI'
		},
		rhPedestalsTerracettes: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'RH_PedestalsTerracettes'
		},
		rhPlantCommunityComp: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'RH_PlantCommunityComp'
		},
		rhBioticIntegrity: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'RH_BioticIntegrity'
		},
		rhHydrologicFunction: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'RH_HydrologicFunction'
		},
		rhSoilSiteStability: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'RH_SoilSiteStability'
		},
		rhAnnualProd: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'RH_AnnualProd'
		},
		dbKey: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'DBKey'
		},
		percentCoveredByEcoSite: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'PercentCoveredByEcoSite'
		},
		plotkey2: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'plotkey2'
		},
		locationType: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'LocationType'
		},
		elevation: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'ELEVATION'
		},
		ahPreferredForb: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'AH_PreferredForb'
		},
		wkbGeometry: {
			type: DataTypes.GEOMETRY(),
			allowNull: true,
			field: 'wkb_geometry'
		},
		public: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'Public'
		}
	}, {
		tableName: 'geoIndicators'
	});
};
