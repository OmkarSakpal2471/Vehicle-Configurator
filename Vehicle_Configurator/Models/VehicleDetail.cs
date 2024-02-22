using System;
using System.Collections.Generic;

namespace Vehicle_Configurator.DbRepos;

public partial class VehicleDetail
{
    public int ConfiId { get; set; }

    public string? CompType { get; set; }

    public string? IsConfigurable { get; set; }

    public int? CompId { get; set; }

    public int? MdlId { get; set; }

    public virtual ComponentMaster? Comp { get; set; }

    public virtual ModelMaster? Mdl { get; set; }
}
